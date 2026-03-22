import React from "react";
import exclusive_image from "../Assests/exclusive_image.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Offers = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 shadow-2xl"
      >
        <div className="flex flex-col md:flex-row items-center justify-between px-10 py-14 gap-8">
          <div className="text-white flex flex-col gap-4 max-w-md">
            <span className="text-pink-200 font-semibold text-sm uppercase tracking-widest">Limited Time</span>
            <h2 className="text-4xl lg:text-5xl font-black leading-tight">Exclusive Offers Just for You</h2>
            <p className="text-pink-100 text-lg">Only on our best-selling products. Don't miss out.</p>
            <motion.button
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/shop")}
              className="w-fit px-8 py-3 bg-white text-red-500 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
            >
              Explore Now →
            </motion.button>
          </div>
          <motion.img
            animate={{ y: [0, -12, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            src={exclusive_image}
            className="w-48 lg:w-64 drop-shadow-2xl"
            alt="exclusive"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Offers;
