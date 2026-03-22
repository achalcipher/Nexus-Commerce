import React from "react";
import hero_image from "../Assests/hero_image.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#fff0f5] via-[#fce3fe] to-[#e8f5ff]">
      {/* Animated blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse2" />
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse2" />

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 gap-10 py-16">
        {/* Left */}
        <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block bg-red-100 text-red-500 font-semibold text-sm px-4 py-1.5 rounded-full tracking-widest uppercase mb-2">
              ✨ New Arrivals Only
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight"
          >
            New <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Collections</span>
            <br />for Everyone
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            Discover the latest trends in fashion. Style that speaks for itself.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => navigate("/shop")}
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-red-300 hover:scale-105 transition-all duration-300"
            >
              Shop Now →
            </button>
            <button
              onClick={() => navigate("/womens")}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-full hover:border-red-400 hover:text-red-500 transition-all duration-300"
            >
              Explore Women
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex gap-8 justify-center lg:justify-start mt-4"
          >
            {[["500+", "Products"], ["10K+", "Customers"], ["4.9★", "Rating"]].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{val}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-40 scale-110" />
          <motion.img
            animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src={hero_image}
            className="relative z-10 w-[320px] lg:w-[480px] drop-shadow-2xl"
            alt="hero"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
