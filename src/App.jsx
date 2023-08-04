import { React, useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import Menu from "./components/Menu"
import Sidepic from "./components/Sidepic"

const option = {
  dashboard: "CBMS Dashboard",
  field: "CBMS Field",
  hub: "Enumerator Hub"
}

const optionList = Object.entries(option).map((val) => (
  <Menu
  key={val[1]}
  name={val[1]}
  />
));

export default function App() {
  return (
    <div className="bg-[#232121] flex flex-col-reverse md:flex-col h-screen">
        <Navbar />
        <div className='flex-1 relative overflow-y-auto w-full'>
          <div className='flex flex-col md:flex-row h-full'>
            <div className='flex-1 absolute md:relative h-full'>
              <Sidepic />
            </div>
            <div className='flex flex-1 flex-col relative h-full justify-center'>
              {optionList}
            </div>
          </div>
        </div>
    </div>
  )
}
