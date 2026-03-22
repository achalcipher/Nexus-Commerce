const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
let sec = process.env.STRIPE_SECRET_KEY || "";

app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000", "http://localhost:3001"], credentials: true }));
mongoose.connect(
  "mongodb+srv://ecommerceuser:12ecommerce12@cluster0.zskh2sx.mongodb.net/e-commerce"
);
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else console.log("running successfully");
});
app.get("/", (req, res) => {
  res.send("Express app is running");
});
//storage->upload configure->app.post->upload
//use express.static middleware to get images link
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});
const User = mongoose.model("User", {
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
app.post("/addproduct", async (req, res) => {
  const productdata = await Product.find({});
  let id1;
  if (productdata.length > 0) {
    id1 = productdata.slice(-1)[0].id + 1;
  } else id1 = 1;
  const product = new Product({
    id: id1,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  //console.log(product);
  await product.save();
  console.log("saved");
  res.json({
    success: true,
    name: req.body.name,
  });
});
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});
app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("all products find");
  res.send(products);
});
app.post("/signup", async (req, res) => {
  let check = await User.findOne({ email: req.body.email });
  if (check) {
    return res.json({ success: false, errors: "existing user found" });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new User({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_ecom");
  return res.json({ success: true, token });
});

app.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.json({ success: false, errors: "Email id not registered" });
  } else {
    let pass = req.body.password === user.password;
    if (!pass) {
      return res.json({ success: false, errors: "Password incorrect" });
    } else {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      return res.json({ success: true, token });
    }
  }
});
app.get("/newcollections", async (req, res) => {
  let products = await Product.find({});
  let newcoll = products.slice(-8);
  //console.log(newcoll);
  res.send(newcoll);
});
app.get("/popularwom", async (req, res) => {
  let products = await Product.find({category:"women"});
  let newcoll = products.slice(0,4);
  //console.log(newcoll);
  res.send(newcoll);
});
const fetchuser = async (req, res, next) => {
  const token = req.header("auth-token");
  try {
    const data = jwt.verify(token, "secret_ecom");
    req.user = data.user;

    next();
  } catch (e) {
    res.status(401).send({ erros: "Please authenticate using valid token" });
  }
};
//data.user id ke form me id store krta h
app.post("/addtocart", fetchuser, async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemid] += 1;
  await User.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Added");
});
app.post("/removefromcart", fetchuser, async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemid] -= 1;
  await User.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Removed");
});

app.post("/getcartdata", fetchuser, async (req, res) => {
  let userData = await User.findOne({ _id: req.user.id });
  // console.log(userData.cartData);
  res.json(userData.cartData);
  // console.log(userData.cartData)
});
// const stripe = require("stripe")(sec);
// app.post("/makepay", async (req, res) => {
//   const data = req.body.newdata;
//   const linedata = data.map((prod) => ({
//     price_data: {
//       currency: "usd",
//       product_data: {
//         name: prod.name,
//         //images: [prod.image],
//       },
//       unit_amount: prod.new_price * 100,
//       quantity: 1,
//     },
//   }));
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//      line_items: linedata,
//     mode: "payment",
//     success_url: "http://localhost:3000/",
//     cancel_url: "http://localhost:3000/",
//   })
//   res.json({id:session.id})
// });
