import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
function Signin(){
    return(
        <Fragment>
           <section className ="signin form-section">
    <div className ="container-fluid">
        <div className ="row">
            <div className ="col-md-12 col-lg-6">
                <div className ="sign-content form-fields py-5">
                    <div className ="form-logo">
                        <Link to ="#" title="Pailogs Logo">
                            <img src="assests/images/logo.png" alt="Pailogs Logo"/>
                        </Link>
                    </div> 
                    <h2 className ="titleone pb10 w-100">Sign In</h2>
                    <p className ="pb50">Don't have an account <Link to  ="#" title="Register Now" className ="a-link">Register Now!</Link></p>
                    <form className ="form w-100" method="post">
                        <div className ="input-group mb-3 mb-lg-4 pb-1">
                            <label for="sign-email-id" className ="form-label">Email ID</label>
                            <input type="email" className ="w-100" id="sign-email-id" placeholder="Email Address" aria-label="Email Address"/>
                        </div>
                        <div className ="input-group mb-3 mb-lg-4 pb-2">
                            <label for="sign-password" className ="form-label">Password</label>
                            <input type="password" className ="w-100" id="sign-password" placeholder="Password" aria-label="Password"/>
                        </div>
                        <div className ="mb-4 pb-2 w-50 float-start">
                            <label className ="custom-check">
                                <input type="checkbox" name=""/>
                                <span>Remember me</span>
                            </label>
                        </div>
                        <div className ="mb-4 pb-2 text-end forgot-password w-50 float-start">
                            <Link to ="#" title="Forgot Password" className ="a-link">Forgot Password?</Link>
                        </div>
                        <div className ="col-12"> 
                            <button type="submit" className ="default-btn w-100">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className ="col-md-12 col-lg-6 px-0 d-none d-lg-block bg-gray">
                <div className ="form-fields-img text-center px-4 py-5 justify-content-center">
                    <img src="assests/images/sign-in.png" alt="Pailogs SignIn" className ="img-fluid"/>
                </div>
            </div>
        </div>
    </div>
</section>
 
    </Fragment>
    )
}
 export default Signin;