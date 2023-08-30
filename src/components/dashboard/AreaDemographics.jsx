import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { SearchBar } from './SearchBar';
import { SearchResultsList } from './SearchResultsList';
import Sidebar from './Sidebar'
import SelectPlace from './geodemographics/SelectPlace';
import './styles.css';

function AreaDemographics() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [results, setResults] = useState([]);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className={`flex h-screen`}>
      <Helmet>
        <title>Area Demographics</title>
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
                <h1 className='text-white text-4xl'>Area Demographics</h1>
              </div>
              <div className='relative w-[40%] flex flex-col items-center min-w-[21rem] text-black z-10'>
                <SearchBar setResults={setResults} />
                {results && results.length > 0 && <SearchResultsList results={results} />}
              </div>
            </div>
          </nav>

          <div className='h-full w-full border-t mt-[15px] border-white flex-col'>
            <div className='relative w-[50%] min-w-[21rem] flex flex-col items-center text-black z-10 mt-[35px]'>
              <SearchBar setResults={setResults} />
              {results && results.length > 0 && <SearchResultsList results={results} />}
            </div>
            <SelectPlace />
            <div className='flex flex-col w-full items-center justify-center py-4 border-t border-white'>
              <div className='flex flex-col w-full items-center justify-center'>
                <img src="/assets/svgs/map.svg" alt="" className='mt-[20px]' />
                <p className='text-[24px]'>Enter Location to View Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AreaDemographics
