import { React } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import DashboardLogin from './components/dashboard/DashboardLogin';
import FieldLogin from './components/field/FieldLogin';
import HubLogin from './components/hub/HubLogin';
import CBMSDashboard from './components/dashboard/CBMSDashboard';
import Portal from './components/portal/Portal';
import Signup from './components/Signup';
import QCI from './components/dashboard/qci';
import Geodemographics from './components/dashboard/Geodemographics'
import AreaDemographics from './components/dashboard/AreaDemographics';
import RawData from './components/dashboard/RawData';

export default function App() {

  const navigate = useNavigate();

  console.log(location.pathname);

  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Portal />} />
          <Route path="/dashboardlogin" element={<DashboardLogin />} />
          <Route path="/fieldlogin" element={<FieldLogin />} />
          <Route path="/hublogin" element={<HubLogin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/cbmsdashboard" element={<CBMSDashboard />} />
          <Route path="/cbmsdashboard/qci/:path" element={<QCI />} />
          <Route path="/cbmsdashboard/geodemographics" element={<Geodemographics />} />
          <Route path="/cbmsdashboard/areademographics" element={<AreaDemographics />} />
          <Route path="/cbmsdashboard/rawdata" element={<RawData />} />
        </Route>
      </Routes>
    </div>
  )
}
