import React, { useContext, useEffect } from 'react'
import Productdisplay from '../Components/Productdisplay/Productdisplay'
import {useParams} from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
export const Product = () => {
  const {productId}=useParams();
  const {allproduct}=useContext(ShopContext);
  const product=allproduct.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Productdisplay product={product}>
      </Productdisplay>
    </div>
  )
}
export default Product
