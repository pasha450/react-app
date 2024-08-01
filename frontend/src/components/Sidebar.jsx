import React from "react";
import { Link } from "react-router-dom";
function Sidebar(){
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
                        <Link to ="/" title="Log Out"><i className="icon-sign-out"></i><span>Log Out</span></Link>
                    </li>
                </ul>
            </aside>
      </>  
    )
}
export default Sidebar;   