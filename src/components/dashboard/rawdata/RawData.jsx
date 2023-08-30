import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from '../Sidebar'
import SelectPlace from './SelectPlace';
import SelectData from './SelectData';
import UploadFiles from './UploadFiles';
import '../styles.css';

function RawData() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const [files, setFiles] = useState([{
    name: 'myFile.pdf'
  }]);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <nav className='relative flex mt-[3rem] md:mb-[10px] pl-4 md:px-0 items-center w-full h-[10%]'>
            <div className='relative flex shrink-0'>
              <div className='relative'>
                <h1 className='text-white text-4xl'>Raw Data</h1>
              </div>
            </div>
            <div className='relative flex w-full space-x-3 md:space-x-8 justify-end'>
              <button className='border rounded-full border-white p-2 hover:bg-[rgba(217,217,217,0.19)] md:h-[36px] md:w-[168px] my-3 md:rounded-[48px] md:bg-white md:font-bold md:text-black md:hover:bg-transparent md:hover:text-white md:hover:border md:hover:border-white ease-in-out duration-200'>
                {isSmallScreen ? <img src="/assets/svgs/searchicon.svg" alt="PSA"
                  className="w-8 hover:shadow-xl" /> : "Search Data"}
              </button>
              <button className='border rounded-full border-white p-2 hover:bg-[rgba(217,217,217,0.19)] md:h-[36px] md:w-[168px] my-3 md:rounded-[48px] md:bg-transparent md:font-bold md:text-white md:hover:bg-white md:hover:text-black md:border md:border-white ease-in-out duration-200'>
                {isSmallScreen ? <img src="/assets/svgs/documentupload.svg" alt="PSA"
                  className="w-8 hover:shadow-xl" /> : "Upload Data"}
              </button>
            </div>
          </nav>

          <div className='border-t mt-[15px] border-white flex-col'>
            <div className='flex flex-col'>
              <p className=' mt-3 font-bold text-[16px] text-white'>Area</p>
              <SelectPlace />
            </div>
            <div className='flex flex-col'>
              <p className=' mt-3 font-bold text-[16px] text-white'>Type of Data</p>
              <SelectData />
            </div>
            <UploadFiles files={files} setFiles={setFiles} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RawData
