import React from 'react'
import hand_icon from "../Assests/hand_icon.png"
import hero_image from "../Assests/hero_image.png"

export const Hero = () => {
  return (
    <div 
    className='w-[100%] flex justify-between lg:flex-row md:flex-row flex-col  bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] to-60%'>
        <div 
        className='hero-left max-w-[700px]    justify-center flex  flex-col gap-[20px] lg:pl-[180px] md:pl-[180px] pl-[1px] self-center  leading-[1.1]'>
            <p className='lg:text-[26px] md:text-[26px] text-center lg:mt-0 mt-8  text-[19px] font-[600] text-[#090909]'>NEW ARRIVALS ONLY</p>
            <div className='flex self-center'>
            <p className='lg:text-[70px] md:text-[40px] text-center text-[35px]  font-[700] text-[#171717]'>New </p>
            <img className='w-[80px] ' src={hand_icon}></img></div>
            <p  className='lg:text-[70px] md:text-[40px] text-center  text-[35px] font-[700] text-[#171717]'>collections for<div className='mt-2'> everyone</div></p>
            <button className='lg:w-[310px] self-center md:w-[210px] text-center h-[70px] mt-[30px] bg-[#ff4141] text-[22px] text-white font-[500] rounded-[75px] mx-8 px-3'>Latest Collections </button>
        </div>
        <div className='hero-right lg:w-[500px] min-w-[210px] w-[300px] flex self-center '>
            <img  src={hero_image} className=' flex self-center'></img>
        </div>
    </div>
  )
}
export default Hero