import React, { useState, useEffect } from 'react';

function AgeGroup() {
    const [firstGroup, set1stGroup] = useState(0.7);
    const [secondGroup, set2ndGroup] = useState(1.4);
    const [thirdGroup, set3rdGroup] = useState(13.1);
    const [fourthGroup, set4thGroup] = useState(26.4);
    const [fifthGroup, set5thIncome] = useState(36.8);
    const [sixthGroup, set6thGroup] = useState(21.6);

    return (
        <div className='m-3 rounded-[10px] h-[24rem] px-4 py-4 bg-gradient-to-r from-black from-30% via-[#195618] via-100%'>
            <div className='flex mb-[3rem]'>
                <h1 className='mr-auto text-[16px] font-bold text-white'>Age Group</h1>
                <img src='assets/svgs/timer.svg' />
            </div>
            <div className='flex'>
                <div className='flex-1'>
                    <ul className='list-none'>
                        <li className='mb-3'>Below 18</li>
                        <li className='mb-3'>18-34</li>
                        <li className='mb-3'>35-44</li>
                        <li className='mb-3'>45-54</li>
                        <li className='mb-3'>55-64</li>
                        <li>64 and above</li>
                    </ul>
                </div>
                <div>
                    <ul className='list-none text-end'>
                        <li className='mb-3'>{firstGroup.toFixed(1)}%</li>
                        <li className='mb-3'>{secondGroup.toFixed(1)}%</li>
                        <li className='mb-3'>{thirdGroup.toFixed(1)}%</li>
                        <li className='mb-3'>{fourthGroup.toFixed(1)}%</li>
                        <li className='mb-3'>{fifthGroup.toFixed(1)}%</li>
                        <li>{sixthGroup.toFixed(1)}%</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AgeGroup
