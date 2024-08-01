import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
function Dashboard(){
    return(
         <Fragment>
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
                                            <li><Link className="dropdown-item" to="profile.html"></Link>My profileLink </li>
                                            <li><Link className="dropdown-item" to="#">SettingsLink </Link></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="dashboard-body">
            <aside className="dash-sidebar">
                <Link to="javascript:void(0)" className="mobile-menu-close"><span></span></Link> 
                <ul>
                    <li className="active">
                        <Link title="Dashboard"><i className="icon-grid"></i><span>Dashboard</span></Link>
                    </li>
                    <li>
                        <Link title="Notification"><i className="icon-bell"></i><span>Notification</span></Link>
                    </li>
                    <li>
                        <Link  title="Account Settings"><i className="icon-setting"></i><span>Account Settings</span></Link>
                    </li>
                    <li>
                        <Link to ="sign-in.html" title="Log Out"><i className="icon-sign-out"></i><span>Log Out</span></Link>
                    </li>
                </ul>
            </aside>
            <div className="Dright-content">
                <div className="dash-main-filed">
                    <ul className="dash-card-list">
                        <li className="incard">
                            <div className="card-avt">
                                <img src="assests/images/users.svg"/>
                            </div>
                            <div className="card-detail">
                                <h3>1560</h3>
                                <p>Total Users</p>
                            </div>
                        </li> 
                        <li className="incard">
                            <div className="card-avt">
                                <img src="/assests/images/calendar.svg"/>
                            </div>
                            <div className="card-detail">
                                <h3>246</h3>
                                <p>New Booking</p>
                            </div>
                        </li>
                        <li className="incard">
                            <div className="card-avt">
                                <img src="assests/images/dollar.svg"/>
                            </div>
                            <div className="card-detail">
                                <h3>$5748</h3>
                                <p>Total Earning</p>
                            </div>
                        </li>
                    </ul>
                    <div className="dash-users">
                        <div className="booing-title d-flex justify-content-between align-items-center pb-3">
                            <h4>User List</h4>
                            <select className="form-select ser-loc-select">
                                <option selected>All</option>
                                <option value="1">All</option>
                            </select>
                        </div>
                        <div className="table-responsive">
                            <table className="table01 w-100">
                                <tr>
                                    <th>#ID</th>
                                    <th>Name</th>
                                    <th>Service Type</th>
                                    <th>Status</th>
                                    <th colspan="2">Date & Time</th>
                                </tr>
                                <tr>
                                    <td>#010</td>
                                    <td>Walter Robyn</td>
                                    <td>Home Cleaning</td>
                                    <td><span className="b-success">Confirmed</span></td>
                                    <td>16/07/2022</td>
                                    <td><Link to className="b-link">View</Link></td>
                                </tr>
                                <tr>
                                    <td>#023</td>
                                    <td>Beatty Nickolas</td>
                                    <td>Home Cleaning</td>
                                    <td><span className="b-reject">Rejected</span></td>
                                    <td>13/06/2022</td>
                                    <td><Link to className="b-link">View</Link></td>
                                </tr>
                                <tr>
                                    <td>#056</td>
                                    <td>Russel Marietta</td>
                                    <td>Home Cleaning</td>
                                    <td><span className="b-success">Confirmed</span></td>
                                    <td>06/06/2022</td>
                                    <td><Link to className="b-link">View</Link></td>
                                </tr>
                                <tr>
                                    <td>#023</td>
                                    <td>Dare Xzavier</td>
                                    <td>Home Cleaning</td>
                                    <td><span className="b-success">Confirmed</span></td>
                                    <td>04/05/2022</td>
                                    <td><Link to className="b-link">View</Link></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <footer className="dash-footer">
                    <div className="dash-foot-inner">
                        <p>Copyright © 2024 pailogs.com | all rights reserved. </p>
                        <ul className="social-icon">
                            <li><Link to  title="Facebook"><i className="icon-facebook-circle"></i></Link></li>
                            <li><Link to  title="Instagram"><i className="icon-instagram-circle"></i></Link> </li>
                            <li><Link to  title="Linkedin"><i className="icon-linkedin-circle"></i></Link> </li>
                            <li><Link to  title="Twitter"><i className="icon-twitter-circle"></i></Link> </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
        <div className="menu-overlay"></div>
        </Fragment>
    )
}   
 export default Dashboard;