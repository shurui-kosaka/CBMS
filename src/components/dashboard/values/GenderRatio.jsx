import React from 'react';
import { useState, useEffect } from 'react';

function GenderRatio() {
    const [male, setMale] = useState(42.1);
    const [female, setFemale] = useState(43.4);

    return (
        <div className='m-3 rounded-[10px] h-[150px] px-4 py-4 bg-gradient-to-r from-[#0A0817] from-30% via-[#265725] via-100%'>
            <div className='flex mb-[2.5rem]'>
                <h1 className='mr-auto text-[16px] font-bold text-white'>Gender Ratio</h1>
                <img src='assets/svgs/gender.svg' />
            </div>
            <ul className='list-none flex space-x-10 md:space-x-8 items-center w-full justify-center'>
                <li className='text-[24px] font-bold text-white'><li className='text-[13px] font-normal text-white'>Males</li>{male.toFixed(1)}%</li>
                <li className='text-[24px] font-bold text-white'><li className='text-[13px] font-normal text-white'>Females</li>{female.toFixed(1)}%</li>
                <li className='text-[24px] font-bold text-white'><li className='text-[13px] font-normal text-white'>Others</li>{(100 - (male + female)).toFixed(1)}%</li>
            </ul>
        </div>
    )
}

export default GenderRatio
