import React, { useContext, useEffect, useState } from "react";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import dropdownicon from "../Assests/dropdown_icon.png"

export const Navbar = () => {
  const [menu, setmenu] = useState("shop");
  const navigate=useNavigate();
  const [vis,setvis]=useState("hidden");
  let {cartdata,allproduct}=useContext(ShopContext)
  function cartdatatotal()
  {
    let count=0;
      allproduct.map((item)=>{
        if(cartdata[item.id]>0)
          count+=cartdata[item.id];
      })
      return count;
  }
  function showit(event)
  {
    if(vis=="visible")
    {
      setvis("hidden")
      
    }
    
    else
    {
      setvis("visible")
    }
    let ico=  document.getElementsByClassName("imgicon")
    ico[0].classList.toggle("rotate180")
  }
  return (
    <div className="nav-bar flex justify-around p-[16px]">
      <div onClick={()=>{navigate(`/${menu}`)}} className="cursor-pointer nav-left flex align-center flex-col lg:flex-row md:flex-row  gap-[10px]">
        <img src={logo} className="lg:w-fit lg:h-fit md:w-8 md:h-8 w-12 h-12 flex "></img>
        <div className="lg:text-[38px] md:text-[25px] text-[13px] font-semibold">OpenCart</div>
      </div>
      {/*  */}          
      <div className="flex flex-col items-center">
      <div onClick={showit} className="rounded-full cursor-pointer border-2 pointer border-black p-2 w-fit flex flex-col mb-4 lg:hidden">
        <img  src={dropdownicon} className={`w-3 h-3 imgicon }`}></img>
      </div>
      <div 
       className={`nav-cent flex flex-col lg:flex-row md:flex-row align-center lg:gap-[50px] md:gap-[50px] ${vis}`}>
        <div
          onClick={() => {
            setmenu("shop")
            navigate("/");
          }}
          className="flex text-[20px] text-center font-[500px] flex-col justify-around "
        >
          <div
            className={`h-fit ${
              menu === `shop` ? "border-b-red-500  border-b-2" : "hover:scale-[1.25]"
            } p-2 cursor-pointer`}
          >
            Shop
          </div>
        </div>
        <div
          onClick={() => {
            setmenu("mens")
            navigate("/mens");
          }}
          className="flex text-[20px] font-[500px]  text-center flex-col justify-around"
        >
          <div
            className={`h-fit ${
              menu === `mens` ? "border-b-red-500  border-b-2" : "hover:scale-[1.25]"
            } p-2 cursor-pointer`}
          >
            Men
          </div>
        </div>
        <div
          onClick={() => {
            setmenu("womens");
            navigate("/womens");
          }}
          className="flex text-[20px] font-[500px]  text-center flex-col justify-around"
        >
          <div
            className={`h-fit ${
              menu === `womens` ? "border-b-red-500  border-b-2" : "hover:scale-[1.25]"
            } p-2 cursor-pointer`}
          >
            Women
          </div>
        </div>
        <div
          onClick={() => {
            setmenu("kids")
            navigate("/kids");;
          }}
          className="flex text-[20px] font-[500px]  text-center flex-col justify-around"
        >
          <div className={`h-fit ${menu ===`kids`? 'border-b-red-500  border-b-2':'hover:scale-[1.25]' } p-2 cursor-pointer`}>
            Kids
          </div>
        </div>
      </div>
      </div>
      {/* <div className="nav-right flex justify-between w-fit"> */}
        <div className="flex flex-col lg:justify-center">
          {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/")}}
           className="lg:w-[135px] lg:h-[50px] p-2 border-[1px] border-[#7a7a7a] cursor-pointer bg-white rounded-[75px] text-[20px] font-[500] active:bg-[#f3f3f3]">
            Logout
          </button>:
          <button onClick={()=>{navigate("/login")}}
           className="lg:w-[135px] lg:h-[50px] p-2 border-[1px] border-[#7a7a7a] cursor-pointer bg-white rounded-[75px] text-[20px] font-[500] active:bg-[#f3f3f3]">
            Login
          </button>}
        </div>
        <div className="flex flex-col lg:justify-center relative text-center ">
          <div className="nav-cart-count bg-red-700 text-white min-w-[22px] p-[1px]  min-h-[22px] aspect:square rounded-full top-[-15px] lg:top-[0px] right-[-10px] text-xl absolute">
          {cartdatatotal()}
          </div>
         
          <img 
          onClick={()=>{navigate('/cart')}}
            src={cart_icon}
            className="w-[35px] cursor-pointer h-[35px]"
          ></img>
        {/* </div> */}
      </div>
    </div>
  );
};
