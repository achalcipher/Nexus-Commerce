import React, { createContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export const ShopContext = createContext(null);
//context can return the value to the children and create function to return the context
const ShopContextprovider = (props) => {
  let cartitems = {};
  const [cartdata, setcartdata] = useState(getcartitems());
  const [allproduct, setallproduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => setallproduct(data));

      if(localStorage.getItem("auth-token"))
      {
         fetch("http://localhost:4000/getcartdata", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            'auth-token':`${localStorage.getItem('auth-token')}`,
            "Content-Type": "application/json",
          },
          body:"",
        }).then((res) => res.json())
        .then((data)=>setcartdata(data))
      }
  }, []);
  function getcartitems() {
    for (let i = 0; i < 300 + 1; i++) {
      cartitems[i] = 0;
    }
    return cartitems;
  }
  
  function addtocart(itemid) {
    if (localStorage.getItem("auth-token")) {
      setcartdata((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          'auth-token':`${localStorage.getItem('auth-token')}`,
          "Content-Type": "application/json",
        },
        body:JSON.stringify({"itemid":itemid}),
      }).then((res) => res.json()).then((data)=>console.log(data));
      toast.success("Item added to cart")
    }
     else {
      toast.error("Please sign in");
    }
  }
  function removefromcart(itemid) {
    if (localStorage.getItem("auth-token")) {
      setcartdata((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          'auth-token':`${localStorage.getItem('auth-token')}`,
          "Content-Type": "application/json",
        },
        body:JSON.stringify({"itemid":itemid}),
      }).then((res) => res.json()).then((data)=>console.log(data));
      toast.error("Item Removed from cart")
    }
     else {
      toast.error("Please sign in");
    }
   
  }
  const Contestval = { allproduct, cartdata, addtocart, removefromcart };
  return (
    <ShopContext.Provider value={Contestval}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextprovider;
