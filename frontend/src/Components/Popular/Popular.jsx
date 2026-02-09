import React, { useEffect, useState } from 'react';
import { Items } from '../Item/Items';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'; 

const Popular = () => {
  const [data_product, setpopwom] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://ecom-back-yale.onrender.com/popularwom')
      .then((res) => res.json())
      .then((data) => {
        setpopwom(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className='popular flex flex-col gap-[10px]'>
      <h1 className='text-[50px] font-[600] text-[#171717] text-center'>Popular in women</h1>
      <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525] self-center'></hr>
      <div className='popular-item flex flex-wrap justify-center mt-[50px] lg:mx-[100px] md:mx-[70px] mb-[10px] gap-[30px]'>
        {data_product.map((item, i) => {
          return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  );
};

export default Popular;
