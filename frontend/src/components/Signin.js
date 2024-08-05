import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin(){
    const { register,handleSubmit,setError, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
    const apiUrl = process.env.REACT_APP_API_URL;
        try {
          const response = await axios.post(`${apiUrl}/login`, data);
          console.log('Login successful:', response);
          toast.success('Login successfully!'); 
        } catch (error) {
            console.log(error,'pashaaa')
        if (error.response && error.response.data.errors) {
            error.response.data.errors.forEach(err => {
            setError(err.field, { type: 'server', message: err.message });
                });
        } else if(error.response && error.response.data.error){
            console.log('object',error.response.data.error)
            setError('invalidCredential', { type: 'server', message: error.response.data.error } )
        }else{
            toast.error('Login failed. Please try again.');

        }
        }
      };
      console.log(errors,'error')
    return(
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
                    <p className ="pb50">Don't have an account <Link to  ="#" title="Login Now" className ="a-link">Login Now!</Link></p>
                    <form className ="form w-100" onSubmit={handleSubmit(onSubmit)}>
                        <div className ="input-group mb-3 mb-lg-4 pb-1">
                            <label htmlFor="sign-email-id" className ="form-label">Email ID</label>
                            <input type="email" className ="w-100" id="sign-email-id" placeholder="Email Address" aria-label="Email Address"
                             {...register('email', {
                                required: 'This field is required',
                                pattern: {
                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email address'
                              }
                                 })}
                                 />
                                  {errors.email && <p className="text-danger">{errors.email.message}</p>}
                        </div>
                        <div className ="input-group mb-3 mb-lg-4 pb-2">
                            <label htmlFor="sign-password" className ="form-label">Password</label>
                            <input type="password" className ="w-100" id="sign-password" placeholder="Password" aria-label="Password"
                              {...register('password', { 
                                required: 'Password is required',
                              })}
                            />
                            {errors.password && <p className="text-danger">{errors.password.message}</p>}
                            {errors.invalidCredential && <p className="text-danger">{errors.invalidCredential.message}</p>}
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
    <ToastContainer />
    </section>
    )
}
 export default Signin;