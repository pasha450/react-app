import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Profile(){
    return(
        <Fragment>
           <div className="main-dashboard">
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
                                    <Link to="/"><i className="icon-bell-fill"></i><span>2</span></Link>
                                </li>
                                <li>
                                    <div className="dropdown">
                                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div className="user-img"><i className="icon-user"></i></div><span>Hi, Admin</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="profile.html">My profile</Link></li>
                                            <li><Link className="dropdown-item" to="#">Settings</Link></li>
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
                <Link to ="javascript:void(0)" className="mobile-menu-close"><span></span></Link>  
                <ul>
                    <li className="active">
                        <Link to ="#" title="Dashboard"><i className="icon-grid"></i><span>Dashboard</span></Link>  
                    </li>
                    <li>
                        <Link to ="#" title="Notification"><i className="icon-bell"></i><span>Notification</span></Link>  
                    </li>
                    <li>
                        <Link to ="#" title="Account Settings"><i className="icon-setting"></i><span>Account Settings</span></Link>  
                    </li>
                    <li>
                        <Link to ="sign-in.html" title="Log Out"><i className="icon-sign-out"></i><span>Log Out</span></Link>  
                    </li>
                </ul>
            </aside>
            <div className="Dright-content">
                <div className="dash-main-filed">
                    <div className="inner-field-div">
                        <div className="top-title">
                            <h4>Edit Profile</h4> 
                        </div>  
                        <div className="edit-profile pt-30">
                            <form className="form w-100" action="profile.html"> 
                                <div className="input-group mb-3 mb-lg-4 pb-1"> 
                                    <label className="form-label w-100">Profile Picture</label>
                                    <div className="profile-img">
                                        <span className="file-title">Browse File</span>
                                        <button className="default-btn">Upload</button>
                                        <input type="file" className="FileUpload1" id="FileInput" name="booking_attachment"/>
                                    </div>
                                </div>
                                <div className="input-group mb-3 mb-lg-4 pb-1">
                                    <label className="form-label">Name</label>
                                    <input type="text" className="w-100" value="Adam Arnold"/>
                                </div>
                                <div className="input-group mb-3 mb-lg-4 pb-1 w-50 w-sm-100 pe-sm-3 float-start">
                                    <label className="form-label">Email ID</label>
                                    <input type="email" className="w-100" value="audin_rushow@gmail.com"/>
                                </div>
                                <div className="input-group mb-3 mb-lg-4 pb-1 w-50 w-sm-100 ps-sm-3 float-start">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" className="w-100" value="+1-202-555-0168" name="Phone Number"/>
                                </div>
                                <div className="input-group mb-3 mb-lg-4 pb-1">
                                    <label className="form-label w-100">Gender</label>
                                    <div className="custom-radio d-flex align-items-center">
                                        <label className="gender-blog">
                                            <input type="radio" name="gender-field" checked/>
                                            <span>Male</span>
                                        </label>
                                        <label className="gender-blog">
                                            <input type="radio" name="gender-field"/>
                                            <span>Female</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="update-bottom text-end">
                                    <button type="button" className="default-btn2">Cancel</button>
                                    <button type="submit" className="default-btn">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <footer className="dash-footer">
                    <div className="dash-foot-inner">
                        <p>Copyright © 2023 homeagy.com | all rights reserved. </p>
                        <ul className="social-icon">
                            <li><Link to ="#" title="Facebook"><i className="icon-facebook-circle"></i></Link>  </li>
                            <li><Link to ="#" title="Instagram"><i className="icon-instagram-circle"></i></Link>  </li>
                            <li><Link to ="#" title="Linkedin"><i className="icon-linkedin-circle"></i></Link>  </li>
                            <li><Link to ="#" title="Twitter"><i className="icon-twitter-circle"></i></Link>  </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    </div>

        </Fragment>
    )
}
 export default Profile;