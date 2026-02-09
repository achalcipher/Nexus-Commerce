import React, { useContext, useEffect, useState } from "react";
import staricon from "../Assests/star_icon.png";
import stardullicon from "../Assests/star_dull_icon.png";
import Newcollections from "../New collections/Newcollections";
import { ShopContext } from "../../Context/ShopContext";

export const Productdisplay = (props) => {
  const { product } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [sizeis, setsizeis] = useState("S");
  const { cartdata, addtocart, removefromcart } = useContext(ShopContext);
  return (
    <div>
    {/* c */}
      <div className="flex lg:flex-row md:flex-row flex-col justify-center gap-8 mt-10 lg:mx-[70px] md:mx-[70px] mx-[10px] lg:h-[80vh] md:h-[80vh] h-fit">
        {/* c */}
        <div className=" md:w-[520px] left md:justify-end flex lg:flex-row  md:flex-col-reverse justify-center flex-row gap-2">
        
           {/* c */}
          <div className=" flex lg:flex-col md:flex-row flex-col gap-3 ">
            <img className="lg:w-[118px]   md:w-[70px] w-[70px] h-[80px] lg:h-[127px] md:h-[80px]" src={product.image}></img>
            <img className="lg:w-[118px]   md:w-[70px] w-[70px] h-[80px] lg:h-[127px] md:h-[80px]" src={product.image}></img>
            <img className="lg:w-[118px]   md:w-[70px] w-[70px] h-[80px] lg:h-[127px] md:h-[80px]" src={product.image}></img>
            <img className="lg:w-[118px]   md:w-[70px] w-[70px] h-[80px] lg:h-[127px] md:h-[80px]" src={product.image}></img>
          </div>
          <div className="md:w-[316px] w-[316px] h-[360px] md:h-[360px] lg:h-[540px] lg:w-[520px]  ">
            <img
              className="lg:w-[520px] w-[316px] h-[360px] md:w-[316px] lg:h-[540px] md:h-[360px] "
              src={product.image}
            ></img>
          </div>
        </div>
        {/*  */}
        <div className="right flex flex-col lg:w-[45%] lg:self-start md:self-start self-center md:w-[45%] w-[85%] gap-2">
          <h1 className="lg:text-3xl md:text-xl font-bold">{product.name}</h1>
          <div className="flex gap-1">
            <img className="w-fit h-fit" src={staricon}></img>
            <img className="w-fit h-fit" src={staricon}></img>
            <img className="w-fit h-fit" src={staricon}></img>
            <img className="w-fit h-fit" src={staricon}></img>
            <img className="w-fit h-fit" src={stardullicon}></img>
            <p>(122)</p>
          </div>
          <div className="flex gap-3">
            <p className="line-through lg:text-lg md:text-md">${product.old_price}</p>
            <p className="text-red-800 font-bold text-2xl">
              ${product.new_price}
            </p>
          </div>
          <div className="lg:text-lg md:text-md">
            This cloth is sleek and versatile, designed to flatter all body
            types with its inclusive design and comfortable fit.
          </div>

          {/* <h1 className="lg:text-lg md:text-lg font-bold lg:mt-8 md:mt-3 mb-3">Select Size</h1> */}
          {/* <div className="flex gap-3">
            <button
              onClick={() => {
                setsizeis("S");
              }}
              className={`border-[1px] border-slate-500 p-2 aspect-square w-[40px] flex justify-center  h-[40px] hover:scale-[1.1] active:bg-slate-50
         ${sizeis === "S" ? "bg-black text-white" : "bg-gray-100"} `}
            >
              S
            </button>
            <button
              onClick={() => {
                setsizeis("M");
              }}
              className={`border-[1px] border-slate-500 p-2 aspect-square w-[40px] flex justify-center  h-[40px] hover:scale-[1.1] active:bg-slate-50
         ${sizeis === "M" ? "bg-black text-white" : "bg-gray-100"} `}
            >
              {" "}
              M
            </button>
            <button
              onClick={() => {
                setsizeis("L");
              }}
              className={`border-[1px] border-slate-500 p-2 aspect-square w-[40px] flex justify-center  h-[40px] hover:scale-[1.1] active:bg-slate-50
         ${sizeis === "L" ? "bg-black text-white" : "bg-gray-100"} `}
            >
              {" "}
              L
            </button>
            <button
              onClick={() => {
                setsizeis("XL");
              }}
              className={`border-[1px] border-slate-500 p-2 aspect-square w-[40px] flex justify-center  h-[40px] hover:scale-[1.1] active:bg-slate-50
         ${sizeis === "XL" ? "bg-black text-white" : "bg-gray-100"} `}
            >
              {" "}
              XL
            </button>
            <button
              onClick={() => {
                setsizeis("XXL");
              }}
              className={`border-[1px] border-slate-500 p-2 aspect-square w-[40px] flex justify-center  h-[40px] hover:scale-[1.1] active:bg-slate-50
         ${sizeis === "XXL" ? "bg-black text-white" : "bg-gray-100"} `}
            >
              {" "}
              XXL
            </button>
          </div> */}
          <div>
            {cartdata[product.id] > 0   ? (
              <div className="qunatity lg:text-xl md:text-lg flex gap-3 border-[1px] mt-5 border-black w-fit p-2 rounded-lg ">
                <button
                  onClick={() => {
                    addtocart(product.id);
                  }}
                  className="rounded-full border-2  border-black w-9 h-9"
                >
                  +
                </button>
                <p className="flex flex-col justify-center">{cartdata[product.id]}</p>
                <button
                  onClick={() => {
                    removefromcart(product.id);
                  }}
                  className="rounded-full border-2 border-black w-9 h-9"
                >
                  -
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  addtocart(product.id);
                }}
                className="self-start mt-5 mb-9 text-lg border-1 active:bg-red-900 bg-red-700 p-3 px-5 text-slate-200 rounded-md"
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    <Newcollections />
    </div>
  );
};

export default Productdisplay;
