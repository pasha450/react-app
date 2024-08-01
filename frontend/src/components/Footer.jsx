import React from "react";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <>
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
                <div className="menu-overlay"></div>
           </> 
    )
}
export default Footer;