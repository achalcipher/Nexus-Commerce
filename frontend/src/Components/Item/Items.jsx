import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Items = (props) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      onClick={() => { navigate(`/product/${props.id}`); window.scrollTo(0, 0); }}
      className="cursor-pointer lg:w-[22%] w-[44%] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">View</span>
        </div>
      </div>
      <div className="p-3">
        <p className="text-gray-800 font-medium text-sm truncate">{props.name}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-red-500 font-bold text-base">${props.new_price}</span>
          <span className="text-gray-400 text-sm line-through">${props.old_price}</span>
          <span className="ml-auto text-green-600 text-xs font-semibold bg-green-50 px-2 py-0.5 rounded-full">
            {Math.round(((props.old_price - props.new_price) / props.old_price) * 100)}% off
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default Items;
