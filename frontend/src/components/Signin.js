import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
function Signin(){
            const { register, handleSubmit, formState: { errors } } = useForm();
            const onSubmit = (data) => {
            console.log(data);
            }
            console.log(errors,'hgfds')
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
                    <form className ="form w-100" onSubmit={handleSubmit(onSubmit)}>
                        <div className ="input-group mb-3 mb-lg-4 pb-1">
                            <label for="sign-email-id" className ="form-label">Email ID</label>
                            <input type="email" className ="w-100" id="sign-email-id" placeholder="Email Address" aria-label="Email Address"
                             {...register('email', {
                                required: 'This field is required',
                                pattern: {
                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email address'
                              }
                                 })}/>
                                  {errors.email && <p className="text-danger">{errors.email.message}</p>}
                        </div>
                        <div className ="input-group mb-3 mb-lg-4 pb-2">
                            <label for="sign-password" className ="form-label">Password</label>
                            <input type="password" className ="w-100" id="sign-password" placeholder="Password" aria-label="Password"
                              {...register('password', {
                                required: 'Password is required',
                                minLength: {
                                  value: 8,
                                  message: 'Password must be at least 8 characters long'
                                },
                                pattern: {
                                  value: /[!@#$%^&*(),.?":{}|<>]/, // Regex for special characters
                                  message: 'Password must contain at least one special character'
                                }
                              })}
                            />
                            {errors.password && <p className="text-danger">{errors.password.message}</p>}
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