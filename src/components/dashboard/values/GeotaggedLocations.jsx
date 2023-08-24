import React from 'react'
import { useState } from 'react'

function GeotaggedLocations() {
    const [totalLoc, setTotalLoc] = useState(`27,923,930`);

    return (
        <div className='m-3 rounded-[10px] px-4 py-4 h-[11rem] bg-gradient-to-r from-black from-30% via-[#58006E] to-[#A400CD]'>
            <div className='flex mb-[5.2rem]'>
                <h1 className='mr-auto text-[16px] font-bold text-white'>Total Geotagged Locations</h1>
                <img src='assets/svgs/locationadd.svg' />
            </div>
            <h2 className='text-[24px] font-bold text-white'>{totalLoc} Locations</h2>
        </div>
    )
}

export default GeotaggedLocations
