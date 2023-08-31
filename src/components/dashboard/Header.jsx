import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { SearchResultsList } from './SearchResultsList';

function Header({ visible }) {
    const [user, setUser] = useState("Gelo");
    const [results, setResults] = useState([]);

    return (
        <nav className='relative flex mt-[3rem] mb-[3rem] md:mb-[10px] pl-4 md:px-0 items-center w-full h-[10%]'>
            <div className='relative flex-wrap md:flex w-full'>
                <div className='relative flex-1 mb-2'>
                    <h1 className='text-white text-4xl'>Good Evening, {user}!</h1>
                </div>
                <div className='relative w-[40%] flex flex-col items-center min-w-[21rem] text-black z-10'>
                    <SearchBar setResults={setResults} />
                    {results && results.length > 0 && <SearchResultsList results={results} />}
                </div>
            </div>
        </nav>
    )
}

export default Header
