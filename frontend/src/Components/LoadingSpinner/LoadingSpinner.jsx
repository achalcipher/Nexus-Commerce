import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
      <div className='text-xl'>Loading products....</div>
    </div>
  );//d
};

export default LoadingSpinner;
