import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Login & Register
import LoginFarmer from './pages/Login'
import Register from './pages/Register'

//Page Admin
import HomePageAdmin from './pages/admin/HomePageAdmin';

//Page Farmer
import HomepageFarmer from './pages/farmer/HomePageFarmer'
import Ricecrop from './pages/farmer/Ricecrop';

//Route
import AdminRoute from './routes/AdminRoute'
import FarmerRoute from './routes/FarmerRoute';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginFarmer/>}/>
          <Route path='/register' element={<Register/>}/>

          <Route path='/farmer/index' element={<FarmerRoute><HomepageFarmer/></FarmerRoute>}/>
          <Route path='/ricecrop' element={<FarmerRoute><Ricecrop/></FarmerRoute>}/>

          <Route path='/admin/index' element={<AdminRoute><HomePageAdmin/></AdminRoute>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
