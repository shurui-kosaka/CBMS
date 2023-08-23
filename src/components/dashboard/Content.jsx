import React, { useState, useEffect } from 'react';
import Header from './Header';
import TotalPopulation from './values/TotalPopulation';
import IncomeGroup from './values/IncomeGroup';
import GenderRatio from './values/GenderRatio';
import HouseholdSize from './values/HouseholdSize';
import GeotaggedLocations from './values/GeotaggedLocations';
import MaritalStatus from './values/MaritalStatus';
import AgeGroup from './values/AgeGroup';

const Content = ({ visible }) => {
    const [population, setPopulation] = useState(`1,234,567,890`);

    return (
        <div className={`${visible ? ' ml-0 md:ml-[320px]' : 'md:ml-0'}
            relative flex flex-col w-full max-h-[100vh] bg-[#242424] duration-500 ease-in-out px-[2rem] md:px-[7rem] pb-6 overflow-x-hidden overflow-y-auto md:overflow-y-hidden`}
        >
            <Header />
            <div className='relative flex-col md:flex w-full flex-1 border-t-[1px] border-white mt-2'>
                <div className='flex my-3'>
                    <h1 className='text-white text-4xl font-bold'>2023 CBMS National Status</h1>
                </div>
                {/*RECORDS*/}
                <div className='flex flex-col md:flex-row items-start justify-start'>
                    <div className='flex flex-col w-full min-w-[30%]'>
                        <TotalPopulation population={population} visible={visible} />
                        <IncomeGroup />
                    </div>
                    <div className='flex flex-col w-full min-w-[30%]'>
                        <GenderRatio />
                        <HouseholdSize />
                        <GeotaggedLocations />
                    </div>
                    <div className='flex flex-col w-full min-w-[30%]'>
                        <MaritalStatus />
                        <AgeGroup />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
