import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Login & Register
import LoginFarmer from './pages/Login'
import Register from './pages/Register'

//Page Admin
import ManageRiceVariety from './pages/admin/ManageRiceVariety'

//Page Farmer
import HomepageFarmer from './pages/farmer/HomePageFarmer'
import Ricecrop from './pages/farmer/Ricecrop';
import RiceVariety from './pages/farmer/RiceVariety';
import Income_Expense_History from './pages/farmer/Income_Expense_History';
import Detail_RiceCaltivation from './pages/farmer/Detail_RiceCaltivation';

//Route
import AdminAuthen from './auth/AdminAuthen'
import UserAuthen from './auth/UserAuthen';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginFarmer/>}/>
          <Route path='/register' element={<Register/>}/>

          <Route path='/farmer/home/:farmer_id' element={<UserAuthen><HomepageFarmer/></UserAuthen>}/>
          <Route path='/ricecrop/:farmer_id' element={<UserAuthen><Ricecrop/></UserAuthen>}/>
          <Route path='/ricevariety' element={<UserAuthen><RiceVariety/></UserAuthen>}/>
          <Route path='/ricecrop/history' element={<UserAuthen><Income_Expense_History/></UserAuthen>} />
          <Route path='/ricecrop/detail' element={<UserAuthen><Detail_RiceCaltivation/></UserAuthen>} />

          <Route path='/admin/riceVariety' element={<AdminAuthen><ManageRiceVariety/></AdminAuthen>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
