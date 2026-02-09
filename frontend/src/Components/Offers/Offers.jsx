import React from 'react'
import exclusive_image from "../Assests/exclusive_image.png"
export const Offers = () => {
  return (
    <div className='flex justify-center mt-[70px]'>
    <div className='lg:w-[70%] md:w-[85%] w-[90%] h-[65vh] flex py-[80px] justify-around gap-3 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] to-[60%] '>
        <div className='offer-left p-3 flex flex-col item-center'>
            <p className='lg:text-[60px] md:text-[35px] text-[22px] font-[600] text-[#171717]'>Exclusive </p>
            <p className='lg:text-[22px] md:text-[16px] text-[12px] font-[600] text-[#171717]'>Offers for you</p>
            <p className=''>Only for best selling products</p>
            <button className='lg:w-[282px] lg:h-[70px] rounded-[35px] cursor-pointer bg-[#ff4141] text-white text-[22px] font-[500px] mt-[30px]  '> Explore now</button>
        </div>
        <div className='offers-right flex justify-center max-w-[200px] max-h-[200px] lg:max-h-fit md:max-h-[200px]'>
            <img src={exclusive_image}></img>
        </div>
    </div>
    </div>
  )
}
export default Offers