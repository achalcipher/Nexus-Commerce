import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import BACKEND_URL from "../config";

const LoginSignup = () => {
  const [logtype, setlogtype] = useState("Signup");
  const [isBackendReady, setIsBackendReady] = useState(false);
  const navigate = useNavigate();
  const [formdet, setformdet] = useState({ username: "", email: "", password: "" });

  useEffect(() => {
    const check = async () => {
      try {
        const r = await fetch("${BACKEND_URL}/allproducts");
        if (r.ok) setIsBackendReady(true);
      } catch {}
    };
    check();
  }, []);

  async function login() {
    let data;
    await fetch("${BACKEND_URL}/login", {
      method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(formdet),
    }).then((r) => r.json()).then((d) => { data = d; });
    if (data.success) { localStorage.setItem("auth-token", data.token); window.location.replace("/"); }
    else toast.error(data.errors);
  }

  async function signup() {
    let data;
    await fetch("${BACKEND_URL}/signup", {
      method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(formdet),
    }).then((r) => r.json()).then((d) => { data = d; });
    if (data.success) { localStorage.setItem("auth-token", data.token); window.location.replace("/"); }
    else toast.error(data.errors);
  }

  if (!isBackendReady) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center">
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
          <div className="w-14 h-14 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Connecting...</h2>
          <p className="text-gray-500">Waking up the backend, just a moment</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* Top gradient bar */}
        <div className="h-2 bg-gradient-to-r from-red-500 to-pink-500" />

        <div className="p-8 flex flex-col gap-5">
          <div className="text-center">
            <h1 className="text-3xl font-black text-gray-900">{logtype === "Login" ? "Welcome Back" : "Create Account"}</h1>
            <p className="text-gray-500 mt-1">{logtype === "Login" ? "Sign in to continue shopping" : "Join NexusCart today"}</p>
          </div>

          {/* Toggle */}
          <div className="flex bg-gray-100 rounded-full p-1">
            {["Signup", "Login"].map((t) => (
              <button key={t} onClick={() => setlogtype(t)}
                className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${logtype === t ? "bg-white shadow text-red-500" : "text-gray-500"}`}>
                {t}
              </button>
            ))}
          </div>

          {logtype === "Signup" && (
            <input name="username" value={formdet.username} onChange={(e) => setformdet({ ...formdet, username: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-red-400 transition-colors text-gray-700"
              type="text" placeholder="Your name" />
          )}
          <input name="email" value={formdet.email} onChange={(e) => setformdet({ ...formdet, email: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-red-400 transition-colors text-gray-700"
            type="email" placeholder="Email address" />
          <input name="password" value={formdet.password} onChange={(e) => setformdet({ ...formdet, password: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-red-400 transition-colors text-gray-700"
            type="password" placeholder="Password" />

          <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            onClick={() => logtype === "Login" ? login() : signup()}
            className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-red-200 transition-all duration-200"
          >
            {logtype === "Login" ? "Sign In" : "Create Account"}
          </motion.button>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <input type="checkbox" id="terms" className="cursor-pointer" />
            <label htmlFor="terms" className="cursor-pointer">I agree to the terms and conditions</label>
          </div>
        </div>
      </motion.div>
      <Toaster />
    </div>
  );
};

export default LoginSignup;
