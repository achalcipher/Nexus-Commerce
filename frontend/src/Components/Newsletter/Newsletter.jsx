import React from 'react'

export const Newsletter = () => {
  return (
    <div className='lg:w-[65%] md:w-[75%] w-[90%] h-[40vh] flex flex-col py-[140px] mb-[150px] mt-[100px]  bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] to-[60%] self-center'>
      <div className='flex flex-col self-center'>
        <h1 className='text-[#454545] lg:text-[40px]  md:text-[35px] text-[20px] text-center  font-[600]'>Get exclusive offers on your mail</h1>
        <p className='text-[#454545] lg:text-[20px]   md:text-[20px]  text-[15px] text-center'>Subscribe to our newsletter and stay updated</p>
        </div>
        <div className='flex bg-white lg:w-[630px] mt-[25px] lg:h-[70px] md:w-[500px] md:h-[50px] w-[270px] h-[30px] rounded-[80px] border-[1px] border-[#e3e3e3] self-center'>
            <input className='w-[500px] ml-[30px]  outline-none text-[#616161] md:text-[12px] text-[12px] lg:text-[16px]' type='email' placeholder='Enter your mail'></input>
            <button  className='lg:w-[210px] md:w-[180px] w-[100px] active:bg-pink-400 lg:h-[70px] md:h-[40px] h-[25px] rounded-[180px] bg-black text-white  md:text-[12px] text-[12px] lg:text-[16px] p-2 border-none  outline-none'>Subscribe</button>
        </div>
    </div>
  )
}
export default Newsletter