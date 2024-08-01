import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './pages/Users';
import Signup from './pages/Signup';



export default function App() {
  return ( 
    <BrowserRouter>
    <Routes> 
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/users" element={<Users/>}/>
    <Route path='/signin' element={<SignIn/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter> 
   );
}  


