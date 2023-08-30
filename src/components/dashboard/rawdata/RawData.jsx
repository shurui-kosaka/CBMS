import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from '../Sidebar'
import SelectPlace from './SelectPlace';
import SelectData from './SelectData';
import '../styles.css';

function RawData() {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <div className={`flex h-screen`}>
      <Helmet>
        <title>Raw Data</title>
      </Helmet>
      <button
        className={`${sidebarVisible ? 'active' : 'inactive'
          } sidebarButton absolute top-11 px-1 py-1 rounded-tr-md rounded-br-md bg-white z-50 transition-all ease-in-out duration-500`}
        onClick={() => { toggleSidebar() }}
      >
        <img src='/assets/svgs/navbar.svg' className='w-6 h-6' />
      </button>
      <Sidebar visible={sidebarVisible} />
      <div className="relative flex w-full h-full">
        <div
          className={`${sidebarVisible ? ' ml-0 md:ml-[320px]' : 'md:ml-0'
            } relative flex flex-col w-full max-h-[100vh] bg-[#242424] duration-500 ease-in-out px-[2rem] md:px-[7rem] pb-6 overflow-y-auto`}
        >
          <nav className='relative flex mt-[3rem] mb-[3rem] md:mb-[10px] ml-7 md:ml-0 items-center w-full h-[10%]'>
            <div className='relative flex-wrap md:flex w-full'>
              <div className='relative flex-1 mb-2'>
                <h1 className='text-white text-4xl'>Raw Data</h1>
              </div>
            </div>
            <div className='flex w-[50%] space-x-8'>
              <button className='mr-auto h-[36px] w-[168px] my-3 rounded-[48px] border border-white font-bold text-white hover:bg-white hover:text-black ease-in-out duration-200'>
                Search Data
              </button>
              <button className='mr-auto h-[36px] w-[168px] my-3 rounded-[48px] bg-white font-bold text-black hover:bg-black hover:text-white hover:border hover:border-white ease-in-out duration-200'>
                Upload Data
              </button>
            </div>
          </nav>

          <div className='h-full w-full border-t mt-[15px] border-white flex-col'>
            <div className='flex flex-col'>
              <p className=' mt-3 font-bold text-[16px] text-white'>Area</p>
              <SelectPlace />
            </div>
            <div className='flex flex-col'>
              <p className=' mt-3 font-bold text-[16px] text-white'>Type of Data</p>
              <SelectData />
            </div>
            <div className='flex flex-col w-[50%]'>
              <p className=' mt-3 font-bold text-[16px] text-white'>Upload File</p>
              <input
                placeholder='Title (Required)'
                className='mt-3 p-2 border rounded-[10px] bg-white text-black shadow-sm'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RawData
