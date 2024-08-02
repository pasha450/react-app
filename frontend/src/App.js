import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './pages/Users';
import Register from './pages/Register';



export default function App() {
  return ( 
    <BrowserRouter>
    <Routes> 
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/users" element={<Users/>}/>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter> 
   );
}  


