import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from '../dashboard/Sidebar';
import { SearchBar } from '../dashboard/SearchBar';
import { SearchResultsList } from '../dashboard/SearchResultsList';
import '../dashboard/styles.css';

function Geodemographics() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [results, setResults] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const regions = [
    'National Capital Region',
    'Central Luzon',
    'Calabarzon',
    // ... more regions
  ];

  const provinces = {
    'National Capital Region': ['Metro Manila'],
    'Central Luzon': ['Bulacan', 'Pampanga', 'Tarlac'],
    'Calabarzon': ['Cavite', 'Laguna', 'Batangas', 'Rizal', 'Quezon'],
    // ... more provinces
  };

  const cities = {
    'Metro Manila': ['Manila', 'Quezon City', 'Makati', 'Pasay', 'Pasig'],
    'Bulacan': ['Malolos', 'Meycauayan', 'San Jose del Monte'],
    'Pampanga': ['Angeles', 'San Fernando'],
    // ... more cities
  };

  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    setSelectedRegion(selectedRegion);
    setSelectedProvince('');
  };

  const handleProvinceChange = (event) => {
    const selectedProvince = event.target.value;
    setSelectedProvince(selectedProvince);
  };

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className={`flex h-screen`}>
      <Helmet>
        <title>CBMS Dashboard-Geodemographics</title>
      </Helmet>
      <button
        className={`${sidebarVisible ? 'active' : 'inactive'} sidebarButton absolute top-11 px-1 py-1 rounded-tr-md rounded-br-md bg-white z-50 transition-all ease-in-out duration-500`}
        onClick={() => { toggleSidebar() }}
      >
        <img src='/assets/svgs/navbar.svg' className='w-6 h-6' />
      </button>
      <Sidebar visible={sidebarVisible} />
      <div className="relative flex w-full h-full">
        <div className={`${sidebarVisible ? ' ml-0 md:ml-[320px]' : 'md:ml-0'}
            relative flex flex-col w-full max-h-[100vh] bg-[#242424] duration-500 ease-in-out px-[2rem] md:px-[7rem] pb-6 overflow-x-hidden overflow-y-auto md:overflow-y-hidden`}
        >
          <nav className='relative flex mt-[3rem] mb-[3rem] md:mb-[10px] ml-7 md:ml-0 items-center w-full h-[10%]'>
            <div className='relative flex-wrap md:flex w-full'>
              <div className='relative flex-1 mb-2'>
                <h1 className='text-white text-4xl'>Geodemographics</h1>
              </div>
              <div className='relative w-[40%] flex flex-col items-center min-w-[21rem] text-black z-10'>
                <SearchBar setResults={setResults} />
                {results && results.length > 0 && <SearchResultsList results={results} />}
              </div>
            </div>
          </nav>
          <div className='h-screen w-full border-t-[1px] border-white flex-col'>
            <div className='relative w-[40%] min-w-[21rem] flex flex-col items-center text-black z-10 mt-4'>
              <SearchBar setResults={setResults} />
              {results && results.length > 0 && <SearchResultsList results={results} />}
            </div>

            <div className='mt-4 w-[40%] min-w-[21rem]'>
              <div className='relative'>
                <select
                  className='w-full p-2 border rounded shadow-sm'
                  value={selectedRegion}
                  onChange={handleRegionChange}
                  aria-label='Select Region'
                >
                  <option value=''>
                    Select Region
                  </option>
                  {regions.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
                <img src='' alt='' className='absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none' />
              </div>

              <div className='relative mt-2'>
                <select
                  className='w-full p-2 border rounded shadow-sm'
                  value={selectedProvince}
                  onChange={handleProvinceChange}
                  aria-label='Select Province'
                >
                  <option value=''>
                    Select Province
                  </option>
                  {selectedRegion && provinces[selectedRegion].map(province => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
                <img src='' alt='' className='absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none' />
              </div>

              <div className='relative mt-2'>
                <select
                  className='w-full p-2 border rounded shadow-sm'
                  value={selectedCity}
                  onChange={handleCityChange}
                  aria-label="Select City"
                >
                  <option value=''>
                    Select City
                  </option>
                  {selectedProvince && cities[selectedProvince].map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <img src='' alt='' className='absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Geodemographics
