import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Login & Register
import LoginFarmer from './pages/Login'
import Register from './pages/Register'

//Page Admin
import HomePageAdmin from './pages/admin/HomePageAdmin';

//Page Farmer
import HomepageFarmer from './pages/farmer/HomePageFarmer'
import Ricecrop from './pages/farmer/Ricecrop';
import RiceVariety from './pages/farmer/RiceVariety';
import Income_Expense_History from './pages/farmer/Income_Expense_History';

//Route
import AdminRoute from './routes/AdminRoute'
import Detail_RiceCaltivation from './pages/farmer/Detail_RiceCaltivation';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginFarmer/>}/>
          <Route path='/register' element={<Register/>}/>

          <Route path='/farmer/index/:farmer_id' element={<HomepageFarmer/>}/>
          <Route path='/ricecrop/:farmer_id' element={<Ricecrop/>}/>
          <Route path='/ricevariety' element={<RiceVariety/>}/>
          <Route path='/history' element={<Income_Expense_History/>} />
          <Route path='/detail' element={<Detail_RiceCaltivation/>} />

          <Route path='/admin/index' element={<AdminRoute><HomePageAdmin/></AdminRoute>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
