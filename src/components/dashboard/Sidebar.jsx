import React, { useState, useNavigate } from 'react';
import './styles.css';
import { Link, useLocation } from "react-router-dom";
import QCIItem from './QCIItem';

const Sidebar = ({ visible }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  console.log(location);

  return (
    <div className={`${visible ? 'transform translate-x-0' : 'transform -translate-x-full'}
      bg-[#0D7582] absolute flex flex-col h-screen w-[320px] overflow-y-auto px-5 z-40 transition-transform duration-500 ease-in-out`}
    >
      <div className="p-4 mt-[1em]">
        <div className="text-2xl font-bold mb-2">
          <img src='/assets/svgs/dashboardlogo.svg' />
        </div>
      </div>

      <div className="flex items-center text-white py-4 border-b-2 border-white shadow-md">
        <div className='flex'>
          <img src='/assets/svgs/profile-icon.svg' className='px-3' />
        </div>
        <div className='flex-col text-start items-center'>
          <h1 className='text-xl font-bold'>User Userino</h1>
          <h1 className='text-sm'>Super Admin</h1>
        </div>
      </div>

      <div className="p-4 w-full">
        <div className={`${location.pathname === "/cbmsdashboard" ? 'active' : 'inactive'} homepage h-[50px] my-5 w-full cursor-pointer rounded-lg p-1 transition-all ease-in-out duration-300 hover:bg-white`}>
          <Link to="/cbmsdashboard">
            <button className={`${location.pathname === "/cbmsdashboard" ? 'active' : 'inactive'} homepageButton w-full h-full items-center text-left hover:text-black hover:font-bold hover:ml-4`}>
              HOMEPAGE
            </button>
          </Link>
        </div>

        <div className="flex-col">
          <div className={`${open ? 'active' : 'inactive'} qciMenu my-5 cursor-pointer rounded-lg p-1 transition-all ease-in-out duration-300`}>
            <div className='flex justify-center items-center'>
              <button className={`${open ? 'active' : 'inactive'} flex-1 qciButton w-full h-full items-center text-left hover:text-black hover:font-bold hover:ml-4`} onClick={() => { setOpen(!open) }}>
                QUESTIONNAIRE CORE INDICATORS
              </button>
              <div>
                {open ? <img src="/assets/svgs/arrowupblack.svg" className="w-3" /> :
                  <img src="/assets/svgs/arrowdownwhite.svg" className="w-3" />}
              </div>
            </div>
            <ul className={`dropdown-menu ${open ? 'active' : 'inactive'} flex-col bg-white rounded-md`}>
              <QCIItem />
            </ul>
          </div>
        </div>

        <div className="flex-col">
          <div className={`${location.pathname === "/cbmsdashboard/geodemographics" ? 'active' : 'inactive'} geoMenu h-[50px] my-5 w-full cursor-pointer rounded-lg p-1 transition-all ease-in-out duration-300 hover:bg-white`}>
            <Link to="/cbmsdashboard/geodemographics">
              <button className={`${location.pathname === "/cbmsdashboard/geodemographics" ? 'active' : 'inactive'} geoButton w-full h-full items-center text-left hover:text-black hover:font-bold hover:ml-4`}>
                GEODEMOGRAPHICS
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-col">
          <div className={`${location.pathname === "/cbmsdashboard/areademographics" ? 'active' : 'inactive'} areaMenu h-[50px] my-5 w-full cursor-pointer rounded-lg p-1 transition-all ease-in-out duration-300 hover:bg-white`}>
            <Link to="/cbmsdashboard/areademographics">
              <button className={`${location.pathname === "/cbmsdashboard/areademographics" ? 'active' : 'inactive'} areaButton w-full h-full items-center text-left hover:text-black hover:font-bold hover:ml-4`}>
                AREA DEMOGRAPHICS
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-col">
          <div className={`${location.pathname === "/cbmsdashboard/rawdata" ? 'active' : 'inactive'} rawMenu h-[50px] my-5 w-full cursor-pointer rounded-lg p-1 transition-all ease-in-out duration-300 hover:bg-white`}>
            <Link to="/cbmsdashboard/rawdata">
              <button className={`${location.pathname === "/cbmsdashboard/rawdata" ? 'active' : 'inactive'} rawButton w-full h-full items-center text-left hover:text-black hover:font-bold hover:ml-4`}>
                RAW DATA
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-col px-4 h-full">
        <Link to={'/cbmsdashboard/accountsettings'}>
          <div className="submenu cursor-pointer hover:bg-white hover:text-black hover:font-bold mt-[2rem] mb-[1rem] pt-2 border-t-2 border-white transition-all ease-in-out duration-300">
            ACCOUNT SETTINGS
          </div>
        </Link>
        <Link to={'/'}>
          <div className="submenu cursor-pointer hover:bg-white hover:text-black hover:font-bold transition-all ease-in-out duration-300">
            SIGN OUT
          </div>
        </Link>
      </div>

    </div>
  );
};

export default Sidebar;
