import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) { toast.error("Enter a valid email"); return; }
    toast.success("Subscribed successfully!");
    setEmail("");
  };

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <span className="text-purple-500 font-semibold text-sm uppercase tracking-widest">Stay in the loop</span>
        <h2 className="text-4xl font-black text-gray-900 mt-2 mb-3">Get Exclusive Offers on Your Mail</h2>
        <p className="text-gray-500 mb-8">Subscribe to our newsletter and never miss a deal.</p>

        <div className="flex flex-col sm:flex-row gap-3 bg-white border-2 border-gray-200 rounded-full p-2 shadow-lg max-w-lg mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-2 outline-none text-gray-700 bg-transparent rounded-full"
          />
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            onClick={handleSubscribe}
            className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-200"
          >
            Subscribe
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;
