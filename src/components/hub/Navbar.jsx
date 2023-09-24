import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='flex items-center justify-center flex-col h-screen '>
            <div class="absolute z-[2] w-[100%] h-[100%] bg-gradient-to-b from-[#00A3FF] from-[5%] to-black to-[100%] blur-md rounded-b rounded-l rounded-r"></div>
            <nav className='z-[3] flex w-full h-[10%] px-2 md:px-24 py-3'>
                <div className='flex items-center h-full mr-auto'>
                    <img src="/assets/svgs/HIRES.svg" className="w-14" alt="Logo" />
                    <p className='collapse md:visible'>Community Based Monitoring System</p>
                </div>
                <div className="flex items-center text-white h-full">
                    <div className='flex-col text-start items-center collapse md:visible'>
                        <h1 className='text-xl font-bold'>User Userino</h1>
                        <h1 className='text-sm'>Super Admin</h1>
                    </div>
                    <div className='flex h-full'>
                        <img src='/assets/svgs/profile-icon.svg' className='px-3 h-full' />
                    </div>
                </div>
            </nav>
            <div className='flex items-center justify-center flex-grow pb-8'>
                helo
            </div>
        </div>
    )
}

export default Navbar
