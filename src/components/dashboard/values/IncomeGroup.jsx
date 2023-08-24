import React from 'react'
import { useState } from 'react';

function IncomeGroup() {
    const [firstIncome, set1stIncome] = useState(0.7);
    const [secondIncome, set2ndincome] = useState(1.4);
    const [thirdIncome, set3rdIncome] = useState(13.1);
    const [fourthIncome, set4thIncome] = useState(26.4);
    const [fifthIncome, set5thIncome] = useState(36.8);
    const [sixthIncome, set6thIncome] = useState(21.6);

    return (
        <div className='m-3 rounded-[10px] h-[24rem] px-4 py-4 bg-gradient-to-r from-black from-30% via-[#065871] via-[110%] to-[#0CA9DB]'>
            <div className='flex mb-5'>
                <div className='mr-auto'>
                    <h1 className='text-[16px] font-bold text-white'>Income Group</h1>
                    <p className='italic text-[10px]'>Monthly Income</p>
                </div>
                <img src='assets/svgs/moneytick.svg' />
            </div>
            <div className='flex'>
                <div className='flex-1'>
                    <ul className='list-none'>
                        <li className='mb-3'>1st Income Class<br /><li className='text-[10px]'>Greater than ₱182,000</li></li>
                        <li className='mb-3'>2nd Income Class<br /><li className='text-[10px]'>₱109,200 to ₱182,000</li></li>
                        <li className='mb-3'>3rd Income Class<br /><li className='text-[10px]'>₱63,700 to ₱109,200</li></li>
                        <li className='mb-3'>4th Income Class<br /><li className='text-[10px]'>₱36,400 to ₱63,700</li></li>
                        <li className='mb-3'>5th Income Class<br /><li className='text-[10px]'>₱18,200 to ₱36,400</li></li>
                        <li>6th Income Class<br /><li className='text-[10px]'>Less than ₱18,200</li></li>
                    </ul>
                </div>
                <div>
                    <ul className='list-none text-end'>
                        <li className='mb-7'>{firstIncome.toFixed(1)}%</li>
                        <li className='mb-7'>{secondIncome.toFixed(1)}%</li>
                        <li className='mb-7'>{thirdIncome.toFixed(1)}%</li>
                        <li className='mb-7'>{fourthIncome.toFixed(1)}%</li>
                        <li className='mb-7'>{fifthIncome.toFixed(1)}%</li>
                        <li>{sixthIncome.toFixed(1)}%</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default IncomeGroup
