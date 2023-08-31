import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from './Sidebar';
import Content from './Content';
import './styles.css';

const AccountSettings = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className={`flex h-screen`}>
      <Helmet>
        <title>CBMS Dashboard</title>
      </Helmet>
      <button
        className={`${sidebarVisible ? 'active' : 'inactive'} sidebarButton absolute top-11 px-1 py-1 rounded-tr-md rounded-br-md bg-white z-50 transition-all ease-in-out duration-500`}
        onClick={() => { toggleSidebar() }}
      >
        <img src='/assets/svgs/navbar.svg' className='w-6 h-6' />
      </button>
      <Sidebar visible={sidebarVisible} />
      <div className="relative flex w-full h-full">
        <Content visible={sidebarVisible} />
      </div>
    </div>
  );
};

export default AccountSettings;
