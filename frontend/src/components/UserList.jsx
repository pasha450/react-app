import React from "react";
import { Link } from "react-router-dom";

function UserList (){
    
    const loggedUserData = localStorage.getItem("storeData");    
    const userData = JSON.parse(loggedUserData); 

    return(
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
            </div>
    )
}
 export default UserList;