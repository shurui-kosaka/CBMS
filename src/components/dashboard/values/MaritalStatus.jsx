import React from 'react';
import { useState, useEffect } from 'react';

function MaritalStatus() {
    const [married, setMarried] = useState(43.1);
    const [single, setSingle] = useState(100 - married);

    return (
        <div className='m-3 rounded-[10px] h-[150px] px-4 py-4 bg-gradient-to-r from-black from-30% via-[#8B670C] via-[110%] to-[#ECAF14]'>
            <div className='flex mb-[2.5rem]'>
                <h1 className='mr-auto text-[16px] font-bold text-white'>Marital Status</h1>
                <img src='/assets/svgs/heartcircle.svg' />
            </div>
            <ul className='list-none flex space-x-10 md:space-x-16 items-center w-full justify-center'>
                <li className='text-[24px] font-bold text-white'><li className='text-[13px] font-normal text-white'>Married</li>{married.toFixed(1)}%</li>
                <li className='text-[24px] font-bold text-white'><li className='text-[13px] font-normal text-white'>Single</li>{single.toFixed(1)}%</li>
            </ul>
        </div>
    )
}

export default MaritalStatus
