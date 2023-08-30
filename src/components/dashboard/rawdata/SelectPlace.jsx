import React, { useState, useEffect } from 'react';

function SelectPlace() {
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
    'Metro Manila': ['Manila', 'Caloocan', 'Las Piñas', 'Makati', 'Malabon', 'Mandaluyong', 'Marikina', 'Muntinlupa', 'Navotas', 'Parañaque', 'Pasay', 'Pasig', 'Quezon', 'San Juan', 'Taguig', 'Valenzuela'],
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

  console.log(selectedRegion)
  console.log(selectedProvince)
  console.log(selectedCity)

  const handleReset = () => {
    setSelectedRegion('');
    setSelectedProvince('');
    setSelectedCity('');
  };

  return (
    <div className='mt-4 w-full min-w-[21rem]'>

      <div className='relative w-[50%]'>
        <select
          className='w-full p-2 border rounded-[10px] bg-white text-black shadow-sm'
          value={selectedRegion}
          onChange={handleRegionChange}
          aria-label='Select Region'
        >
          <option value='' disabled hidden>
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
          <option value='' disabled hidden>
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
          <option value='' disabled hidden>
            City/Municipality
          </option>
          {selectedProvince && cities[selectedProvince]?.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        <img src='' alt='' className='absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none' />
      </div>

    </div>

  )
}

export default SelectPlace
