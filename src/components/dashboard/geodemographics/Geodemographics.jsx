import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { SearchBar } from '../SearchBar';
import { SearchResultsList } from '../SearchResultsList';
import Sidebar from '../Sidebar'
import '../styles.css';

function Geodemographics() {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [results, setResults] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const regions = [
    'National Capital Region (NCR)',
    'Cordillera Administrative Region (CAR)',
    'Ilocos Region (Region I)',
    'Cagayan Valley (Region II)',
    'Central Luzon (Region III)',
    'Calabarzon (Region IV-A)',
    'Southwestern Tagalog Region (Mimaropa - Region IV-B)',
    'Bicol Region (Region V)',
    'Western Visayas (Region VI)',
    'Central Visayas (Region VII)',
    'Eastern Visayas (Region VIII)',
    'Zamboanga Peninsula (Region IX)',
    'Northern Mindanao (Region X)',
    'Davao Region (Region XI)',
    'Soccsksargen (Region XII)',
    'Caraga (Region XIII)',
    'Bangsamoro (BARMM)',
  ];

  const provinces = {
    'National Capital Region (NCR)': ['Metro Manila'],
    'Cordillera Administrative Region (CAR)': ['Abra', 'Apayao', 'Benguet', 'Ifugao', 'Kalinga', 'Mountain Province', 'Baguio (Highly Urbanized  City'],
    'Central Luzon': ['Bulacan', 'Pampanga', 'Tarlac'],
    'Calabarzon': ['Cavite', 'Laguna', 'Batangas', 'Rizal', 'Quezon'],
  };

  const cities = {
    'Metro Manila': ['Manila', 'Quezon', 'Caloocan', 'Las Piñas', 'Makati', 'Malabon', 'Mandaluyong', 'Marikina', 'Muntinlupa', 'Navotas', 'Parañaque', 'Pasay', 'Pasig', 'Quezon', 'San Juan', 'Taguig', 'Valenzuela'],
    'Abra': ['Bangued', 'Boliney', 'Bucay', 'Bucay', 'Bucloc', 'Daguioman', 'Danglas', 'Dolores', 'La Paz', 'Lacub', 'Langangilang', 'Lagayen', 'Langiden', 'Licuan-Baay', 'Luba', 'Malibcong', 'Manabo', 'Peñarrubia', 'Pidigan', 'Pilar', 'Sallapadan', 'San Isidro', 'San Juan', 'San Quintin', 'Tayum', 'Tineg', 'Tubo', 'Villaviciosa'],
    'Bulacan': ['Malolos', 'Meycauayan', 'San Jose del Monte'],
    'Pampanga': ['Angeles', 'San Fernando'],
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
        <title>Geodemographics</title>
      </Helmet>
      <button
        className={`${
          sidebarVisible ? 'active' : 'inactive'
        } sidebarButton absolute top-11 px-1 py-1 rounded-tr-md rounded-br-md bg-white z-50 transition-all ease-in-out duration-500`}
        onClick={() => { toggleSidebar() }}
      >
        <img src='/assets/svgs/navbar.svg' className='w-6 h-6' />
      </button>
      <Sidebar visible={sidebarVisible} />
      <div className="relative flex w-full h-full">
        <div
          className={`${
            sidebarVisible ? ' ml-0 md:ml-[320px]' : 'md:ml-0'
          } relative flex flex-col w-full max-h-[100vh] bg-[#242424] duration-500 ease-in-out px-[2rem] md:px-[7rem] pb-6 overflow-y-auto`}
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

          <div className='h-full w-full border-t mt-[15px] border-white flex-col'>
            <div className='relative w-[50%] min-w-[21rem] flex flex-col items-center text-black z-10 mt-[35px]'>
              <SearchBar setResults={setResults} />
              {results && results.length > 0 && <SearchResultsList results={results} />}
            </div>

            <div className='mt-4 w-full min-w-[21rem] border-b border-white'>
              <div className='relative w-[50%]'>
                <select
                  className='w-full p-2 border rounded-[10px] bg-white text-black shadow-sm'
                  value={selectedRegion}
                  onChange={handleRegionChange}
                  aria-label='Select Region'
                >
                  <option value=''>
                    Region
                  </option>
                  {regions?.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
                <img src='' alt='' className='absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none' />
              </div>
              <div className='relative mt-2 w-[50%]'>
                <select
                  className='w-full p-2 border rounded-[10px] bg-white text-black shadow-sm'
                  value={selectedProvince}
                  onChange={handleProvinceChange}
                  aria-label='Select Province'
                >
                  <option value=''>
                    Province
                  </option>
                  {selectedRegion && provinces[selectedRegion]?.map(province => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
                <img src='' alt='' className='absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none' />
              </div>

              <div className='relative mt-2 w-[50%]'>
                <select
                  className='w-full p-2 border rounded-[10px] bg-white text-black shadow-sm'
                  value={selectedCity}
                  onChange={handleCityChange}
                  aria-label="Select City"
                >
                  <option value=''>
                    City/Municipality
                  </option>
                  {selectedProvince && cities[selectedProvince]?.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <img src='' alt='' className='absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none' />
              </div>
              <button className='h-[36px] w-[168px] my-3 rounded-[48px] bg-[#15B725] font-bold text-black hover:bg-black hover:text-[#15B725] ease-in-out duration-200'>
                Find
              </button>
            </div>
            <div className='flex flex-col w-full items-center justify-center py-4'>
              <div className='flex flex-col w-full items-center justify-center'>
                <img src="/assets/svgs/map.svg" alt="" className='mt-[20px]' />
                <p className='text-[24px]'>Enter Location to View Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Geodemographics
