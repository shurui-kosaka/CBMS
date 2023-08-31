import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Sidebar from '../Sidebar';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import '../styles.css';

import GenAccSet from './GenAccSet';
import PushNotifications from './PushNotifications';
import Security from './Security';
import Theme from './Theme';
import AddRes from './AddRes';
import AdminSettings from './AdminSettings';

function AccountSettings() {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [activeSection, setActiveSection] = useState(null);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleSectionClick = (sectionName) => {
        setActiveSection(sectionName);
    };

    const renderRightSideComponent = () => {
        switch (activeSection) {
            case 'account':
                return <GenAccSet />;
            case 'notifications':
                return <PushNotifications />;
            case 'security':
                return <Security />;
            case 'theme':
                return <Theme />;
            case 'addres':
                return <AddRes />;
            case 'adminsettings':
                return <AdminSettings />;
            default:
                return null;
        }
    };

    return (
        <div className={`flex h-screen`}>
            <Helmet>
                <title>Account Settings</title>
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
                    <nav className='relative flex mt-[3rem] ml-7 md:ml-0 items-center w-full h-[10%]'>
                        <div className='relative flex-wrap md:flex w-full'>
                            <div className='relative flex-1'>
                                <h1 className='text-white text-4xl'>Account Settings</h1>
                            </div>
                        </div>
                    </nav>

                    <div className='h-full w-full flex border-t mt-[15px] border-white'>
                        <LeftSide onSectionClick={handleSectionClick} />
                        <RightSide>{renderRightSideComponent()}</RightSide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSettings
