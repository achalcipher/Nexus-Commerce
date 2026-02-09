import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import menbanner from './Components/Assests/banner_mens.png'
import womenbanner from './Components/Assests/banner_women.png'
import kidbanner from './Components/Assests/banner_kids.png'
function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop category="shop" />}></Route>
          <Route path="/ordered" element={<div className="text-center text-3xl my-5">Thanks for shopping with us</div>}></Route>
          <Route path="/shop" element={<Shop category="shop" />}></Route>
          <Route
            path="/mens"
            element={<ShopCategory category="men" banner={menbanner}/>}
          ></Route>
          <Route
            path="/womens"
            element={<ShopCategory category="women" banner={womenbanner} />}
          ></Route>
          <Route
            path="/kids"
            element={<ShopCategory category="kid" banner={kidbanner} />}
          ></Route>
          <Route path="/product/" element={<Product />}>
            <Route path=":productId" element={<Product/>}></Route>
          </Route>
          <Route
            path="/cart"
            element={<Cart/>}
          ></Route>
           <Route
            path="/login"
            element={<LoginSignup/>}
          ></Route>
           <Route path="*" element={<Shop category="shop" />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;