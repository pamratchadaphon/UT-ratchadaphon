import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Login 
import LoginFarmer from './pages/Login'

//Page Admin
import HomePageAdmin from './pages/admin/HomePageAdmin';

//Page Farmer
import HomepageFarmer from './pages/farmer/HomePageFarmer'

//Route
import AdminRoute from './routes/AdminRoute'
import FarmerRoute from './routes/FarmerRoute';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginFarmer/>}/>
          <Route path='/farmer/index' element={<FarmerRoute><HomepageFarmer/></FarmerRoute>}/>
          
          <Route path='/admin/index' element={<AdminRoute><HomePageAdmin/></AdminRoute>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
