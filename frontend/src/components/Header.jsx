import React from "react";
import { Link } from "react-router-dom";
function Header() {
    return(
        <>
        <header className="dash-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="header-left">
                        <button className="toggle-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className="dash-logo">
                        <Link to="/">
                        <img src="/assests/images/logo.png" alt="logo"/></Link>
                        </div> 
                    </div>
                    <div className="header-right">
                        <div className="head-admin-area">
                            <ul>
                                <li className="head-noti">
                                <Link to="/notifications"><i className="icon-bell-fill"></i><span>2</span></Link>
                                </li>
                                <li>
                                    <div className="dropdown">
                                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div className="user-img"><i className="icon-user"></i></div><span>Hi, Admin</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/profile">My profile</Link></li>
                                            <li><Link className="dropdown-item" to="#">Settings </Link></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}
 export default Header;