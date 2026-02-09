import React from 'react'
import Hero from '../Components/Hero/Hero'
import  Popular  from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Newcollections from '../Components/New collections/Newcollections'
import Newsletter from '../Components/Newsletter/Newsletter'
// md-image small-cart icon

export const Shop = () => {
  return (
    <div className='w-[100%] flex flex-col'>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollections/>
      <Newsletter/>
    </div>
  )
}
export default Shop
