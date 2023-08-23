import React from 'react';
import { useState } from 'react';

function HouseholdSize() {
  const [householdSize, setHouseholdSize] = useState(4.5);

  return (
    <div className='m-3 rounded-[10px] px-4 py-4 h-[11rem] bg-gradient-to-r from-black from-30% via-[#57180B] via-70% to-[#E33F1B]'>
      <div className='flex mb-[5.2rem]'>
        <h1 className='mr-auto text-[16px] font-bold text-white'>Avg. Household Size</h1>
        <img src='./src/assets/svgs/home3.svg' />
      </div>
      <h2 className='text-[24px] font-bold text-white'>{householdSize} People</h2>
    </div>
  )
}

export default HouseholdSize
