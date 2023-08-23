import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './qciitem.css'

function QCIItem() {
    const location = useLocation();

    return (
        <li className='dropdownItem rounded-md shadow-md'>
            <li className={`${location.pathname === "/cbmsdashboard/qci/health" ? 'active' : 'inactive'} health`}>
                <Link to="/cbmsdashboard/qci/health">
                    <button className='p-2 pl-7 hover:font-bold w-full text-left text-sm hover:border-b hover:border-black transition-all ease-in-out duration-300 rounded-md shadow-md'>
                        HEALTH</button>
                </Link>
            </li>
            <li className={`${location.pathname === "/cbmsdashboard/qci/nutrition" ? 'active' : 'inactive'} nutrition`}>
                <Link to="/cbmsdashboard/qci/nutrition">
                    <button className='p-2 pl-7 hover:font-bold w-full text-left text-sm hover:border-b hover:border-black transition-all ease-in-out duration-300 rounded-md shadow-md'>
                        NUTRITION</button>
                </Link>
            </li>
            <li className={`${location.pathname === "/cbmsdashboard/qci/housing" ? 'active' : 'inactive'} housing`}>
                <Link to="/cbmsdashboard/qci/housing">
                    <button className='p-2 pl-7 hover:font-bold w-full text-left text-sm hover:border-b hover:border-black transition-all ease-in-out duration-300 rounded-md shadow-md'>
                        HOUSING</button>
                </Link>
            </li>
            <li className={`${location.pathname === "/cbmsdashboard/qci/waterandsanitation" ? 'active' : 'inactive'} was`}>
                <Link to="/cbmsdashboard/qci/waterandsanitation">
                    <button className='p-2 pl-7 hover:font-bold w-full text-left text-sm hover:border-b hover:border-black transition-all ease-in-out duration-300 rounded-md shadow-md'>
                        WATER AND SANITATION</button>
                </Link>
            </li>
            <li className={`${location.pathname === "/cbmsdashboard/qci/basiceducationandliteracy" ? 'active' : 'inactive'} beal`}>
                <Link to="/cbmsdashboard/qci/basiceducationandliteracy">
                    <button className='p-2 pl-7 hover:font-bold w-full text-left text-sm hover:border-b hover:border-black transition-all ease-in-out duration-300 rounded-md shadow-md'>
                        BASIC EDUCATION AND LITERACY</button>
                </Link>
            </li>
            <li className={`${location.pathname === "/cbmsdashboard/qci/income" ? 'active' : 'inactive'} income`}>
                <Link to="/cbmsdashboard/qci/income">
                    <button className='p-2 pl-7 hover:font-bold w-full text-left text-sm hover:border-b hover:border-black transition-all ease-in-out duration-300 rounded-md shadow-md'>
                        INCOME</button>
                </Link>
            </li>
            <li className={`${location.pathname === "/cbmsdashboard/qci/employment" ? 'active' : 'inactive'} employment`}>
                <Link to="/cbmsdashboard/qci/employment">
                    <button className='p-2 pl-7 hover:font-bold w-full text-left text-sm hover:border-b hover:border-black transition-all ease-in-out duration-300 rounded-md shadow-md'>
                        EMPLOYMENT</button>
                </Link>
            </li>
            <li className={`${location.pathname === "/cbmsdashboard/qci/peaceandorder" ? 'active' : 'inactive'} pao`}>
                <Link to="/cbmsdashboard/qci/peaceandorder">
                    <button className='p-2 pl-7 hover:font-bold w-full text-left text-sm hover:border-b hover:border-black transition-all ease-in-out duration-300 rounded-md'>
                        PEACE AND ORDER</button>
                </Link>
            </li>
        </li>
    )
}

export default QCIItem
