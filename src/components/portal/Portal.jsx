import { React } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Menu from "./Menu";
import Sidepic from "./Sidepic";
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';

function Portal() {
  const option = {
    dashboard: "CBMS Dashboard",
    field: "CBMS Field",
    hub: "Enumerator Hub"
  }

  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate('/dashboardlogin');
  };

  const handleFieldClick = () => {
    navigate('/fieldlogin');
  };

  const handleHubClick = () => {
    navigate('/hublogin');
  };



  return (
    <div className="bg-[#232121] items-center flex flex-col-reverse md:flex-col h-screen">
      <Helmet>
          <title>CBMS Portal</title>
        </Helmet>
      <Navbar />
      <div className='flex-1 relative overflow-y-auto w-full'>
        <div className='flex flex-col md:flex-row h-full'>
          <div className='flex-1 absolute md:relative h-full z-20'>
            <div className='flex-1 h-full'>
              <Sidepic />
            </div>
          </div>
          <div className='flex flex-1 flex-col relative h-full w-full justify-center z-20' style={{ flex: '20%' }}>
            <Routes>
              <Route path="/"
                element={
                  <>
                    <Menu name={option.dashboard} onClick={handleDashboardClick} />
                    <Menu name={option.field} onClick={handleFieldClick} />
                    <Menu name={option.hub} onClick={handleHubClick} />
                  </>
                } />
            </Routes>
          </div>
          <div className='absolute flex justify-end w-0 h-0 md:w-full md:h-full pr-60 z-10 animate__animated animate__fadeIn'>
            <img src='/assets/images/philmap.png' className='relative' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Portal
