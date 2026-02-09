import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const LoginSignup = () => {
  const [logtype, setlogtype] = useState("Signup");
  const [isBackendReady, setIsBackendReady] = useState(false);
  const navigate = useNavigate();
  
  const [formdet, setformdet] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await fetch('https://ecom-back-yale.onrender.com/allproducts');
        if (response.ok) {
          setIsBackendReady(true);
        }
      } catch (error) {
        // Backend not ready yet
      }
    };
    checkBackend();
  }, []);

  async function login() {
    let responsedata;
    await fetch('https://ecom-back-yale.onrender.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formdet),
    }).then((resp) => resp.json()).then((data) => { responsedata = data });

    if (responsedata.success) {
      localStorage.setItem('auth-token', responsedata.token);
      window.location.replace("/");
    } else {
      toast.error(responsedata.errors);
    }
  }

  async function signup() {
    let responsedata;
    await fetch('https://ecom-back-yale.onrender.com/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formdet),
    }).then((resp) => resp.json()).then((data) => { responsedata = data });

    if (responsedata.success) {
      localStorage.setItem('auth-token', responsedata.token);
      window.location.replace("/");
    } else {
      toast.error(responsedata.errors);
    }
  }

  function valuechange(e) {
    setformdet({
      ...formdet,
      [e.target.name]: e.target.value
    });
  }

  if (!isBackendReady) {
    return (
      <div className="flex flex-col w-[100%] h-[100vh] bg-[#fce3fe] items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-4">
          <div className="animate-spin w-12 h-12 border-4 border-[#ff4141] border-t-transparent rounded-full mx-auto mb-6"></div>
          <h2 className="text-2xl font-semibold mb-4 text-[#ff4141]">Please Wait</h2>
          <p className="text-gray-600 mb-2">We're connecting to our backend services</p>
          <p className="text-gray-500 text-sm">This usually takes about 50 seconds</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-[100%] h-[100vh] bg-[#fce3fe] pt-[100px]">
      <div className="flex self-center flex-col lg:w-[40%] md:w-[70%] w-[95%] lg:h-[80vh] md:h-[80vh] h-[78vh] bg-white lg:px-[40px] md:px-[40px] px-[15px] py-[60px] gap-[29px]">
        <h1 className="mx-[20px] font-[700] text-2xl">{logtype}</h1>
        {logtype == "Signup" ? (
          <input
            name="username"
            value={formdet.username}
            onChange={valuechange}
            className="h-[92px] w-[100%] lg:pl-[20px] md:pl-[20px] pl-[5px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] lg:text-[20px] md:text-[22px] py-2 text-[17px]"
            type="text"
            placeholder="Your name"
          />
        ) : null}
        <input
          name="email"
          value={formdet.email}
          onChange={valuechange}
          className="h-[92px] w-[100%] lg:pl-[20px] md:pl-[20px] pl-[5px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] lg:text-[20px] md:text-[22px] py-2 text-[17px]"
          type="email"
          placeholder="Your email"
        />
        <input
          name="password"
          value={formdet.password}
          onChange={valuechange}
          className="h-[92px] w-[100%] lg:pl-[20px] md:pl-[20px] pl-[5px] border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] lg:text-[20px] md:text-[22px] py-2 text-[17px]"
          type="password"
          placeholder="Your password"
        />
        <button
          onClick={() => { logtype == "Login" ? login() : signup() }}
          className="w-[100%] active:bg-slate-600 rounded-lg h-[72px] text-white bg-[#ff4141] lg:mt-[20px] md:mt-[20px] mt-[10px] text-[24px] font-[500] cursor-pointer"
        >
          Continue
        </button>
        {logtype == "Signup" ? (
          <p className="text-sm lg:text-lg md:text-lg">
            Already have an account?{" "}
            <button
              onClick={() => { setlogtype("Login"); }}
              className="text-red-700 cursor-pointer"
            >
              Login here
            </button>
          </p>
        ) : null}
        {logtype == "Login" ? (
          <p className="text-sm lg:text-lg md:text-lg">
            Don't have a account?{" "}
            <button
              onClick={() => { setlogtype("Signup"); }}
              className="text-red-700 cursor-pointer"
            >
              Create here
            </button>
          </p>
        ) : null}
        <div className="flex gap-2 flex-row">
          <div>
            <input
              className="self-start cursor-pointer"
              type="checkbox"
              name=""
              id="h1"
            />
          </div>
          <label className="cursor-pointer" htmlFor="h1">
            By continuing you agree to terms and conditions
          </label>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default LoginSignup;
