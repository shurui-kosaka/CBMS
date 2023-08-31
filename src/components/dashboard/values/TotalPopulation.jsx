import React from 'react'

function TotalPopulation(props) {
    const { population } = props;

    return (
        <div className='m-3 rounded-[10px] h-[150px] px-4 py-4 bg-gradient-to-r from-[#0A0817] from-30% via-[#9988FD] via-[110%] to-white'>
            <div className='flex mb-[3.5rem]'>
                <h1 className='mr-auto text-[16px] font-bold text-white'>Total Recorded Population</h1>
                <img src='/assets/svgs/profile2user.svg' />
            </div>
            <div>
                <h2 className='text-[24px] font-bold text-white'>{population}</h2>
            </div>
        </div>
    )
}

export default TotalPopulation
