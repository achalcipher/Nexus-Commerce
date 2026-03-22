import React, { useContext, useState, useEffect } from "react";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [menu, setmenu] = useState("shop");
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  let { cartdata, allproduct } = useContext(ShopContext);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function cartdatatotal() {
    let count = 0;
    allproduct.map((item) => { if (cartdata[item.id] > 0) count += cartdata[item.id]; });
    return count;
  }

  const navLinks = [
    { label: "Shop", key: "shop", path: "/" },
    { label: "Men", key: "mens", path: "/mens" },
    { label: "Women", key: "womens", path: "/womens" },
    { label: "Kids", key: "kids", path: "/kids" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white"}`}
    >
      <div className="flex items-center justify-between px-6 lg:px-16 py-3">
        {/* Logo */}
        <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer group">
          <img src={logo} className="w-10 h-10 group-hover:rotate-12 transition-transform duration-300" alt="logo" />
          <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
            NexusCart
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => { setmenu(link.key); navigate(link.path); }}
              className="relative text-[17px] font-medium text-gray-700 hover:text-red-500 transition-colors duration-200 group"
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 transition-all duration-300 ${menu === link.key ? "w-full" : "w-0 group-hover:w-full"}`} />
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => { localStorage.removeItem("auth-token"); window.location.replace("/"); }}
              className="hidden lg:block px-5 py-2 rounded-full border-2 border-red-400 text-red-500 font-medium hover:bg-red-500 hover:text-white transition-all duration-200"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden lg:block px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Login
            </button>
          )}

          {/* Cart */}
          <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
            <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} src={cart_icon} className="w-8 h-8" alt="cart" />
            {cartdatatotal() > 0 && (
              <motion.span
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
              >
                {cartdatatotal()}
              </motion.span>
            )}
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden flex flex-col gap-1.5 p-1">
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 px-6 pb-4"
          >
            {navLinks.map((link) => (
              <button key={link.key} onClick={() => { setmenu(link.key); navigate(link.path); setMobileOpen(false); }}
                className={`block w-full text-left py-3 text-lg font-medium border-b border-gray-100 ${menu === link.key ? "text-red-500" : "text-gray-700"}`}>
                {link.label}
              </button>
            ))}
            {localStorage.getItem("auth-token") ? (
              <button onClick={() => { localStorage.removeItem("auth-token"); window.location.replace("/"); }}
                className="mt-3 w-full py-2 rounded-full border-2 border-red-400 text-red-500 font-medium">Logout</button>
            ) : (
              <button onClick={() => { navigate("/login"); setMobileOpen(false); }}
                className="mt-3 w-full py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium">Login</button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
