import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import deleteicon from "../Assests/trash-bin.png";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Cartpage = () => {
  const navigate = useNavigate();
  const { allproduct, cartdata, addtocart, removefromcart } = useContext(ShopContext);

  function gettotalamount() {
    return allproduct.reduce((total, item) => cartdata[item.id] > 0 ? total + cartdata[item.id] * item.new_price : total, 0);
  }

  const cartItems = allproduct.filter((item) => cartdata[item.id] > 0);
  const total = gettotalamount();
  const shipping = total > 499 || total === 0 ? 0 : 50;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-black text-gray-900 mb-8">
          Your Cart <span className="text-red-500">({cartItems.length})</span>
        </motion.h1>

        {cartItems.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-center py-24 bg-white rounded-3xl shadow-sm">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-400 mb-6">Add some items to get started</p>
            <button onClick={() => navigate("/shop")}
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg transition-all">
              Shop Now
            </button>
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Items */}
            <div className="flex-1 flex flex-col gap-4">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div key={item.id}
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                    className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4"
                  >
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl bg-gray-100" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <p className="text-red-500 font-bold">${item.new_price}</p>
                    </div>
                    <div className="flex items-center gap-2 border-2 border-gray-200 rounded-xl p-1">
                      <button onClick={() => removefromcart(item.id)}
                        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-red-100 hover:text-red-500 font-bold transition-colors">−</button>
                      <span className="w-6 text-center font-bold">{cartdata[item.id]}</span>
                      <button onClick={() => addtocart(item.id)}
                        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-green-100 hover:text-green-600 font-bold transition-colors">+</button>
                    </div>
                    <p className="font-bold text-gray-800 w-16 text-right">${cartdata[item.id] * item.new_price}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
              className="lg:w-80 bg-white rounded-2xl p-6 shadow-sm h-fit sticky top-24">
              <h2 className="text-xl font-black text-gray-900 mb-6">Order Summary</h2>
              <div className="flex justify-between text-gray-600 mb-3">
                <span>Subtotal</span><span className="font-semibold">${total}</span>
              </div>
              <div className="flex justify-between text-gray-600 mb-3">
                <span>Shipping</span>
                <span className={`font-semibold ${shipping === 0 ? "text-green-500" : ""}`}>{shipping === 0 ? "FREE" : `$${shipping}`}</span>
              </div>
              <div className="border-t-2 border-gray-100 my-4" />
              <div className="flex justify-between text-gray-900 font-black text-lg mb-6">
                <span>Total</span><span>${total + shipping}</span>
              </div>
              {total > 0 && total < 500 && (
                <p className="text-sm text-orange-500 bg-orange-50 rounded-xl p-3 mb-4">
                  Add ${500 - total} more for free shipping!
                </p>
              )}
              <motion.button
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/ordered")}
                className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-red-200 transition-all"
              >
                Proceed to Checkout →
              </motion.button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cartpage;
