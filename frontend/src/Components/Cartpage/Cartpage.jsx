import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import deleteicon from "../Assests/trash-bin.png"
import { useNavigate, useParams } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
import toast from "react-hot-toast"; 

export const Cartpage = () => {
  const navigate=useNavigate();

  const { allproduct, cartdata,addtocart, removefromcart } = useContext(ShopContext);
  const {productId}=useParams()
  function makepayment()
  {
    navigate("/ordered")
    }

  function gettotalamount()
  {
    let totalamount=0;
    allproduct.map((item)=>{
      if(cartdata[item.id]>0)
        {
          totalamount+=cartdata[item.id]*item.new_price;
        }
    })
    return totalamount;
  }
  return (
    <div className="flex flex-col w-[100%]">
      <div className=" gap-2 font-bold flex flex-col ">
        {
          allproduct.map((item)=>{
              if(cartdata[item.id]>0)
              {
                return ( 
                  <div className="w-[100%] flex flex-col self-center">
                  <hr className="border-2 md:w-[80%] lg:w-[80%] w-[95%] mb-9 mt-5 self-center bg-black dark:bg-black"></hr>
                  {/*  */}
                  <div className="mb-3 flex lg:flex-row md:flex-row flex-row gap-2 md:w-[80%] lg:w-[80%] w-[95%] self-center items-center">
                  {/*  */}
                  <div className="flex-row lg:w-[30%] md:w-[30%] w-[40%] gap-3 flex justify-between">
                  <div className=" flex justify-center self-center"><img className="w-[100px] self-center" src={item.image}></img></div> </div>
                  {/*  */}
                  <div className="flex flex-col lg:flex-row md:flex-row lg:w-[80%] md:w-[80%] w-[80%] justify-between">
                    <p className="lg:w-[35%] md:w-[35%] w-[95%] flex  flex-col justify-center">{item.name}</p>
                   {/*  */}
                    <div className="flex w-[85%] lg:mt-0 md:mt-0 mt-3 justify-between flex-wrap">
                  <div className="w-[15%] flex  flex-col justify-center text-center">${item.new_price}</div>
                  <div className="w-[15%] flex  justify-around  ">
                  <div className="w-[15%] flex justify-center">
                  <div className="qunatity  text-xl flex lg:gap-3  md:gap-3 gap-1 border-[1px] self-center  border-black w-fit md:p-2 p-1 rounded-lg ">
                <button
                  onClick={() => {
                    addtocart(item.id);
                  }}
                  className="rounded-full border-2  border-black lg:w-9 md:w-9 w-7  lg:h-9 md:h-9 h-7 "
                >
                  +
                </button>
                <p className="flex flex-col justify-center">{cartdata[item.id]}</p>
                <button
                  onClick={() => {
                    removefromcart(item.id);
                  }}
                  className="rounded-full border-2 border-black lg:w-9 md:w-9 w-7  lg:h-9 md:h-9 h-7"
                >
                  -
                </button>
              </div></div>
              </div>
                  <div className="w-[20%] flex  flex-col justify-center text-center">${cartdata[item.id]*item.new_price}</div>
                  </div>
                   </div>
                   </div>
                  </div>
                )
              }
          })
        }
      </div>
      <hr className="border-4 w-[82%] self-center bg-black dark:bg-black"></hr>
      <div className="w-[82%] self-center mt-9">
      <h1 className="text-3xl font-bold">Cart totals</h1>
      <div className="mt-8 flex lg:w-[50%] md:w-[75%] w-[90%] justify-between text-xl">
        <p className="text-xl">Subtotals</p>
        <p>${gettotalamount()}</p>
      </div>
      <div className="mt-2 flex lg:w-[50%] md:w-[75%] w-[90%] justify-between text-xl">
        <p className="text-xl">Shipping charges</p>
        <p>{gettotalamount()>499||gettotalamount()==0?"$0":"$50"}</p>
      </div>
      <hr className="border-4 lg:w-[50%] md:w-[75%] w-[90%] mt-5 self-center bg-black dark:bg-black"></hr>
      <div className="mt-2 flex lg:w-[50%] md:w-[75%] w-[90%] justify-between text-xl">
        <p className="text-xl">Total amount</p>
        <p>${gettotalamount()>499||gettotalamount()==0?gettotalamount():gettotalamount()+50}</p>
      </div>
      <hr className="border-4 lg:w-[50%] md:w-[75%] w-[90%] mt-5 self-center bg-black dark:bg-black"></hr>
      <p className="mt-4 mb-2 text-xl text-red-400">{`Add Order for  $${(500-gettotalamount())>0?500-gettotalamount():0} to get  Free delivery`}</p>
      </div>
      <div className="w-[82%] self-center flex"> <button onClick={makepayment}  className="ml-[self-start mt-5 text-lg border-1 active:bg-red-900 bg-red-700 p-3 px-5 text-slate-200 rounded-md">Procees to checkout</button></div>
    
    </div>
  );
};
export default Cartpage;
