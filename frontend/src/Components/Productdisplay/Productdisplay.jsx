import React, { useContext, useEffect, useState } from "react";
import staricon from "../Assests/star_icon.png";
import stardullicon from "../Assests/star_dull_icon.png";
import Newcollections from "../New collections/Newcollections";
import { ShopContext } from "../../Context/ShopContext";
import { motion } from "framer-motion";

export const Productdisplay = (props) => {
  const { product } = props;
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [selectedImg, setSelectedImg] = useState(0);
  const { cartdata, addtocart, removefromcart } = useContext(ShopContext);

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  const discount = Math.round(((product.old_price - product.new_price) / product.old_price) * 100);

  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-0">
            {/* Images */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2 p-8 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-square">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} onClick={() => setSelectedImg(i)}
                    className={`w-16 h-16 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${selectedImg === i ? "border-red-500" : "border-transparent"}`}>
                    <img src={product.image} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2 p-8 flex flex-col gap-5 justify-center">
              <div>
                <span className="text-sm text-red-500 font-semibold uppercase tracking-widest">New Arrival</span>
                <h1 className="text-3xl font-black text-gray-900 mt-1">{product.name}</h1>
              </div>

              <div className="flex items-center gap-2">
                {[1,2,3,4].map(i => <img key={i} src={staricon} className="w-5 h-5" alt="star" />)}
                <img src={stardullicon} className="w-5 h-5" alt="star" />
                <span className="text-gray-500 text-sm ml-1">(122 reviews)</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-4xl font-black text-red-500">${product.new_price}</span>
                <span className="text-xl text-gray-400 line-through">${product.old_price}</span>
                <span className="bg-green-100 text-green-600 text-sm font-bold px-3 py-1 rounded-full">{discount}% OFF</span>
              </div>

              <p className="text-gray-500 leading-relaxed">
                This cloth is sleek and versatile, designed to flatter all body types with its inclusive design and comfortable fit. Premium quality fabric for everyday wear.
              </p>

              <div className="flex flex-col gap-3">
                {cartdata[product.id] > 0 ? (
                  <div className="flex items-center gap-4 border-2 border-gray-200 rounded-2xl p-3 w-fit">
                    <button onClick={() => removefromcart(product.id)}
                      className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-red-100 hover:text-red-500 font-bold text-xl transition-colors">−</button>
                    <span className="text-xl font-bold w-8 text-center">{cartdata[product.id]}</span>
                    <button onClick={() => addtocart(product.id)}
                      className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-green-100 hover:text-green-600 font-bold text-xl transition-colors">+</button>
                  </div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    onClick={() => addtocart(product.id)}
                    className="w-full py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-red-200 transition-all"
                  >
                    Add to Cart
                  </motion.button>
                )}
              </div>

              <div className="flex gap-6 pt-4 border-t border-gray-100 text-sm text-gray-500">
                <span>✅ Free returns</span>
                <span>🚚 Fast delivery</span>
                <span>🔒 Secure checkout</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Newcollections />
    </div>
  );
};

export default Productdisplay;
