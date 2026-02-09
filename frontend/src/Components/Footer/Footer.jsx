import React from 'react'
import footer_logo from "../Assests/logo_big.png"
import insta from "../Assests/instagram_icon.png"
import linkedin from "../Assests/linkedin.png"
import github from "../Assests/github.png"
export const Footer = () => {
  return (
    <div className='Footer flex flex-col gap-6 w-[100%]'>
     <hr className="border-4 w-[80%] mt-5 self-center bg-black dark:bg-black"></hr>
    <div className='flex align-center justify-center'>
        <img src={footer_logo }></img>
        <div className='flex flex-col justify-around'>
        <h1 className='lg:text-[42px] md:text-[42px] text-[30px] font-[600]'>OpenCart</h1></div>
    </div>
    <div className='foot-links flex lg:flex-row md:flex-row flex-col gap-4 text-xl self-center'>
        <div className='text-center'>Company</div>
        <div className='text-center'>Products</div>
        <div className='text-center'>Offices</div>
        <div className='text-center'>About</div>
        <div className='text-center'>Contact</div>
    </div>
    <div className='flex gap-4 self-center'>
        <div  onClick={()=>{window.open("https://www.instagram.com/ayush_s_c_/", "_blank");}} className='hover:scale-[1.1]'>
            <img className="w-[43px] border-[2px] p-1 cursor-pointer"
            src={insta}></img>
        </div>
        <div  onClick={()=>{window.open("https://www.linkedin.com/in/ayush-singh-chauhan-6a65a4249/", "_blank");}} className='hover:scale-[1.1]'>
            <img  className="w-[43px] border-[2px] p-1 cursor-pointer" src={linkedin}></img>
        </div>
        <div onClick={()=>{window.open("https://github.com/ayush121314?tab=repositories", "_blank");}} className='hover:scale-[1.1]' >
            <img  className="w-[43px] border-[2px] p-1 cursor-pointer" src={github}></img>
        </div>
    </div>
    <hr className=' w-[80%] text-black self-center'></hr>
    <h1 className='text-center'>Copyright @ 2023 - All Right Reserved.</h1>
    </div>
  )
}
export default Footer