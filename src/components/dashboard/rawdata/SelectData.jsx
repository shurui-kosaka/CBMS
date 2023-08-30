import React from 'react';

function SelectData() {
    return (
        <div className='mt-4 min-w-[360px] max-w-[475px] md:w-[50%]'>
            <div className='relative'>
                <select
                    className='w-full p-2 border rounded-[10px] bg-white text-black shadow-sm'
                    defaultValue='' // Use defaultValue instead of value
                >
                    <option value='' disabled hidden>
                        Category of Data
                    </option>
                </select>
            </div>

            <div className='relative mt-2'>
                <select
                    className='w-full p-2 border rounded-[10px] bg-white text-black shadow-sm'
                    defaultValue=''
                >
                    <option value='' disabled hidden>
                        Sub-Category Data
                    </option>
                </select>
            </div>

            <div className='relative mt-2'>
                <select
                    className='w-full p-2 border rounded-[10px] bg-white text-black shadow-sm'
                    defaultValue=''
                >
                    <option value='' disabled hidden>
                        More Specific Data
                    </option>
                    {/* Add other <option> elements here */}
                </select>
            </div>

            <div className='relative mt-2'>
                <select
                    className='w-full p-2 border rounded-[10px] bg-white text-black shadow-sm'
                    defaultValue=''
                >
                    <option value='' disabled hidden>
                        Year
                    </option>
                </select>
            </div>
        </div>
    );
}

export default SelectData;
