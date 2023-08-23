import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return (
        <nav className='flex items-center w-full h-[10%] overflow-hidden bg-[rgba(238,232,232,0.5)] md:bg-black'>
            <div className="flex w-full h-full justify-center items-center">
                <div className="md:flex-1 text-left">
                    <Link to ="/">
                        <button className='font-bold text-3xl md:ml-[4rem] hover:text-white transition-all ease-in-out duration-500'>{isSmallScreen ? <img src="./src/assets/svgs/HIRES.svg" alt="PSA"
                            className="w-10 hover:shadow-xl"/> : "CBMS Portal"}</button>
                    </Link>
                </div>
                <div className="md:flex md:mr-[6rem]">
                    <ul className='flex md:space-x-32 md:text-lg'>
                        <a href="https://psa.gov.ph/" target="_blank">
                            <li className="hover:text-white transition-all ease-in-out duration-500">
                            {isSmallScreen ? <img src="./src/assets/svgs/psalogo.svg" alt="PSA"
                                className="w-10 mx-[7em] hover:shadow-xl transition-all ease-in-out duration-300"/> : "PSA"}
                            </li>
                        </a>
                        <a href="#">
                            <li className="hover:text-white transition-all ease-in-out duration-500">
                            {isSmallScreen ? <img src="./src/assets/svgs/contact.svg" alt="PSA"
                                className="w-10 hover:shadow-xl transition-all ease-in-out duration-300"/> : "CONTACT"}
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
