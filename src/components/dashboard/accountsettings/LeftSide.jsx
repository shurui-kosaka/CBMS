import React from 'react'

function LeftSide({ onSectionClick }) {
    return (
        <div className='flex-[42%] flex-col w-full h-full border-r border-white'>
            <div className='text-white hover:text-black hover:bg-white flex-col p-3 transition-all ease-in-out duration-200' onClick={() => onSectionClick('account')} >
                <p className='font-bold text-lg'>Account Settings</p>
                <p className='font-light text-xs'>The Big Brown Fox Jumped Over The Lazy Dog</p>
            </div>
            <div className='text-white hover:text-black hover:bg-white flex-col p-3 transition-all ease-in-out duration-200' onClick={() => onSectionClick('notifications')}>
                <p className='font-bold text-lg'>Push Notifications</p>
                <p className='font-light text-xs'>The Big Brown Fox Jumped Over The Lazy Dog</p>
            </div>
            <div className='text-white hover:text-black hover:bg-white flex-col p-3 transition-all ease-in-out duration-200' onClick={() => onSectionClick('security')}>
                <p className='font-bold text-lg'>Security</p>
                <p className='font-light text-xs'>The Big Brown Fox Jumped Over The Lazy Dog</p>
            </div>
            <div className='text-white hover:text-black hover:bg-white flex-col p-3 transition-all ease-in-out duration-200' onClick={() => onSectionClick('theme')}>
                <p className='font-bold text-lg'>Theme</p>
                <p className='font-light text-xs'>The Big Brown Fox Jumped Over The Lazy Dog</p>
            </div>
            <div className='text-white hover:text-black hover:bg-white flex-col p-3 transition-all ease-in-out duration-200' onClick={() => onSectionClick('addres')}>
                <p className='font-bold text-lg'>Additional Resources</p>
                <p className='font-light text-xs'>The Big Brown Fox Jumped Over The Lazy Dog</p>
            </div>
            <div className='text-white hover:text-black hover:bg-white flex-col p-3 transition-all ease-in-out duration-200' onClick={() => onSectionClick('adminsettings')}>
                <p className='font-bold text-lg'>Admin Settings</p>
                <p className='font-light text-xs'>The Big Brown Fox Jumped Over The Lazy Dog</p>
            </div>
        </div>
    )
}

export default LeftSide
