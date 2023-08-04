import React from "react"

function Navbar() {
    return (
        <nav className='flex items-center w-full h-[10%] overflow-hidden'>
            <div className="bg-inherit mr-auto w-full">
                <a className="bg-inherit" href='./index.html' target='_self'>
                    <button className='font-bold text-xl px-32'>CBMS Portal</button>
                </a>
            </div>
            <div></div>
            <ul className='list-none flex px-40 space-x-32'>
                <a href="https://psa.gov.ph/" target="_blank">
                    <li>PSA</li>
                </a>
                <a href="#">
                    <li>CONTACT</li>
                </a>
            </ul>
        </nav>
    )
}

export default Navbar
