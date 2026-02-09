import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export const Items = (props) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>{navigate(`/product/${props.id}`)
    window.scrollTo(0,0);}}
    className=' hover:scale-[1.05] flex flex-col hover:duration-6000  cursor-pointer lg:w-[22%] w-[40%] '>
        <img src={props.image} className=''></img>
        <p>{props.name}</p>
        <div className='flex gap-[20px]'>
            <p className='text-[#374151] text-[18px] font-[600]'>${props.new_price}</p>
            <p className='text-[#8c8c8c] text-[18px] font-[500] line-through'>${props.old_price}</p>
        </div>
    </div>
  )
}
export default Items
