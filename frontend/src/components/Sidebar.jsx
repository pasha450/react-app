import React from "react";
import { Link } from "react-router-dom";
// import { ToastContainer,toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; 
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
function Sidebar(){
   
    const navigate = useNavigate();
    const handleLogout =async () => {
       
        // toast .info('Logged out successfully!');

        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out of your account.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out!',
            cancelButtonText: 'Cancel'
         });
         if (result.isConfirmed) {
            Cookies.remove('authToken');
            localStorage.removeItem('savedEmail'); 
            localStorage.removeItem('savedPassword'); 
            Swal.fire(
                'Logged out!',
                'You have been logged out successfully.',
                'success'
              );
              navigate('/login');
         }
    };
    return(
      <> 
          <aside className="dash-sidebar">
                <Link to="javascript:void(0)" className="mobile-menu-close"><span></span></Link> 
                <ul>
                    <li className="active">
                        <Link to ="/"><i className="icon-grid"></i><span>Dashboard</span></Link>
                    </li>
                    <li>
                        <Link to="/users"><i className="icon-bell"></i><span>Users</span></Link>
                    </li>
                    <li>
                        <Link to="/profile"><i className="icon-setting"></i><span>Account Settings</span></Link>
                    </li>
                    <li>
                        <Link to ="javascript:void(0)" onClick={handleLogout} title="Log Out"><i className="icon-sign-out"></i><span>Log Out</span></Link>
                    </li>
                </ul>
            </aside>
            {/* <ToastContainer /> */}
      </>  
    )
}
export default Sidebar;   