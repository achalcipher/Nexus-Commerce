import React, { useEffect, useState } from "react";
import { Items } from "../Item/Items";
import { motion } from "framer-motion";
import BACKEND_URL from "../../config";

const Newcollections = () => {
  const [New_collections, setNew_collections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BACKEND_URL}/newcollections`)
      .then((res) => res.json())
      .then((data) => { setNew_collections(data); setLoading(false); });
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-pink-500 font-semibold text-sm uppercase tracking-widest">Just Dropped</span>
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-2">New Collections</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto mt-4" />
      </motion.div>

      {loading ? (
        <div className="flex justify-center gap-4 flex-wrap">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="lg:w-[22%] w-[44%] rounded-2xl overflow-hidden bg-gray-100 animate-pulse">
              <div className="aspect-square bg-gray-200" />
              <div className="p-3 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 lg:mx-16">
          {New_collections.map((item, i) => (
            <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Newcollections;
