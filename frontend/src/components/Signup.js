import React from "react";
import { Link } from "react-router-dom";
function Signup(){
    return(
          <section className="signin form-section">
       <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 col-lg-6">
                <div className="sign-content form-fields py-5">
                    <div className="form-logo">
                        <Link to ="/assests/images/logo.png">
                            <img src="/assests/images/logo.png" alt="logo"/></Link>
                    </div>
                    <h2 className="titleone pb10 w-100">Sign Up</h2>
                    <p className="pb50">Already have an account <Link to="/Register Now" className="a-link">Login Now!</Link></p>
                    <form className="form w-100" method="post">
                        <div classname="input-group mb-3 mb-lg-4 pb-1">
                            <label for="sign-email-id" className="form-label">Name</label>
                            <input type="email" className="w-100" id="sign-name" placeholder="Name" aria-label="Name"/>
                        </div>
                        <div className="input-group mb-3 mb-lg-4 pb-1">
                            <label for="sign-email-id" className="form-label">Email ID</label>
                            <input type="email" className="w-100" id="sign-email-id" placeholder="Email Address" aria-label="Email Address"/>
                        </div>
                        <div className="input-group mb-3 mb-lg-4 pb-1">
                            <label for="sign-email-id" className="form-label">Phone</label>
                            <input type="email" className="w-100" id="sign-phone" placeholder="Phone" aria-label="Phone"/>
                        </div>
                        <div className="input-group mb-3 mb-lg-4 pb-2">
                            <label for="sign-password" className="form-label">Password</label>
                            <input type="password" className="w-100" id="sign-password" placeholder="Password" aria-label="Password"/>
                        </div>
                        <div className="input-group mb-3 mb-lg-4 pb-2">
                            <label for="sign-password" className="form-label">Confirm Password</label>
                            <input type="password" className="w-100" id="sign-confirm-password" placeholder="Confirm Password" aria-label="Confirm Password"/>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="default-btn w-100">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-12 col-lg-6 px-0 d-none d-lg-block bg-gray">
                <div className="form-fields-img text-center px-4 py-5 justify-content-center">
                    <img src="/assests/images/sign-in.png" alt="Pailogs SignIn" className="img-fluid"/>
                </div>
            </div>
        </div>
    </div>
</section>

    )
}