import React from "react";
import footer_logo from "../Assests/logo_big.png";
import insta from "../Assests/instagram_icon.png";
import linkedin from "../Assests/linkedin.png";
import github from "../Assests/github.png";
import { motion } from "framer-motion";

export const Footer = () => {
  const links = ["Company", "Products", "Offices", "About", "Contact"];
  const socials = [
    { img: insta, url: "https://www.instagram.com" },
    { img: linkedin, url: "https://www.linkedin.com" },
    { img: github, url: "https://github.com" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-2">
              <img src={footer_logo} className="w-10 h-10" alt="logo" />
              <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">NexusCart</span>
            </div>
            <p className="text-gray-400 text-sm">Your one-stop destination for the latest fashion trends.</p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <motion.div key={i} whileHover={{ scale: 1.2, y: -3 }} onClick={() => window.open(s.url, "_blank")}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-500 transition-colors duration-200">
                  <img src={s.img} className="w-5 h-5" alt="social" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12">
            <div>
              <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Shop</h4>
              {["Men", "Women", "Kids", "New Arrivals", "Sale"].map((l) => (
                <p key={l} className="text-gray-400 hover:text-white cursor-pointer mb-2 text-sm transition-colors">{l}</p>
              ))}
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Company</h4>
              {links.map((l) => (
                <p key={l} className="text-gray-400 hover:text-white cursor-pointer mb-2 text-sm transition-colors">{l}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2024 NexusCart. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Made with ❤️ for fashion lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
