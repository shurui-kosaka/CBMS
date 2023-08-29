import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <div className='flex items-center justify-center flex-col h-screen bg-[#242424]'>
        <nav className='flex w-full h-[10%] px-2 md:px-24 py-3'>
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
          <div className='flex flex-col items-center justify-center h-full'>
            <img src='/assets/svgs/notfound.svg' alt='Not Found' className='w-[80%] md:w-[70%] mb-4' />
            <p className='w-full text-center mb-8 text-lg md:text-xl'>Page Not Found</p>
            <div className='flex items-center w-full justify-center space-x-11'>
              <button className='h-[36px] w-[168px] rounded-[48px] bg-white font-bold text-black hover:bg-black hover:text-white ease-in-out duration-200'>Report</button>
              <Link to='/'>
                <button className='h-[36px] w-[168px] rounded-[48px] bg-[#15B725] font-bold text-black hover:bg-black hover:text-[#15B725] ease-in-out duration-200'>
                  Go to Homepage
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default NotFound
