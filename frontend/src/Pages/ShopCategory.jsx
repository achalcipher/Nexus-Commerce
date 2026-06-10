import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Items from "../Components/Item/Items";
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';

export const ShopCategory = (props) => {
  const { allproduct } = useContext(ShopContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (allproduct && allproduct.length > 0) {
      setLoading(false);
    }
  }, [allproduct]);

  return (
    <div className='w-full flex flex-col'>
      <img className='w-[86%] block mt-5 self-center' src={props.banner} alt="banner" />
      <div className='flex gap-2 w-[86%] mt-5 justify-between self-center'>
        <p className='self-center'>
          <span className='font-[800]'>Showing products</span>
        </p>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className='flex flex-wrap mt-[50px] lg:mx-[100px] md:mx-[70px] mb-[10px] gap-[30px] justify-center'>
          {allproduct.map((item, i) => {
            if (item.category === props.category) {
              return (
                <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
