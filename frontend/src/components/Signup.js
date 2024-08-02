import React from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

function Signup(){
            const { register, handleSubmit, formState: { errors } } = useForm();
            const onSubmit = (data) => {
            console.log(data);
            }
            console.log(errors,'hgfds')
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
                        <form className="form w-100" onSubmit={handleSubmit(onSubmit)}>
                            <div classname="input-group mb-3 mb-lg-4 pb-1">
                                <label for="sign-email-id" className="form-label">Name</label>
                                <input type="text" name="name" className="w-100"  id="sign-name" placeholder="Name"  aria-label="Name"
                                {...register("name", {
                                    required: 'Name is required',
                                    maxLength: {
                                      value: 10,
                                      message: 'Name cannot exceed 10 characters'
                                    },
                                    pattern: {
                                      value: /^[A-Za-z]+$/, // Regex to match only letters
                                      message: 'Name must contain only letters'
                                    }
                                  })}
                                  />
                                {errors.name && <p className="text-danger">{errors.name.message}</p>}
                            </div>
                            <div className="input-group mb-3 mb-lg-4 pb-1">
                                <label for="sign-email-id" className="form-label">Email ID</label>
                                <input type="email" className="w-100" id="sign-email-id" placeholder="Email Address" aria-label="Email Address"  {...register('email', {
                               required: 'This field is required',
                               pattern: {
                               value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                               message: 'Please enter a valid email address'
                             }
                                })}/>
                                 {errors.email && <p className="text-danger">{errors.email.message}</p>}
                            </div>
                            <div className="input-group mb-3 mb-lg-4 pb-1">
                                <label for="sign-email-id" className="form-label">Phone</label>
                                <input type="tel" className="w-100" id="sign-phone" placeholder="Phone" aria-label="Phone" {...register('phone', { required: 'Phone number is required',
                                    pattern: {  value: /^\d{10}$/, message: 'Phone number must be exactly 10 digits',  }, })} />
                                     {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                                
                            </div>
                            <div className="input-group mb-3 mb-lg-4 pb-2">
                                <label for="sign-password" className="form-label">Password</label>
                                <input type="password" className="w-100" id="sign-password" placeholder="Password" aria-label="Password"  {...register('password', {
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
                            <div className="input-group mb-3 mb-lg-4 pb-2">
                                <label for="sign-password" className="form-label">Confirm Password</label>
                                <input type="password" className="w-100" id="sign-confirm-password" placeholder="Confirm Password" aria-label="Confirm Password" 
                                  {...register('confirmPassword', {
                                    required: 'Confirm Password is required',
                                    validate: value => value ===  'password' || 'Passwords and confirm password must be same',
                                  })}
                                />
                                 {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
                             
                                 
                                
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

export default Signup;  