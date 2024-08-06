import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Login from './pages/Login';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Users from './pages/Users';
import Register from './pages/Register';
import PrivateRoute from './pages/PrivateRoute';




export default function App() {
  return ( 
    <BrowserRouter>
    <Routes> 
    <Route path="/" element={<PrivateRoute Component={Dashboard} />} />
        <Route
            path="/login"
            element={<Login/>}
          />
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/users" element={<Users/>}/>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
     
   );
}  


