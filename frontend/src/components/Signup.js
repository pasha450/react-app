import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup(){
    const { register, watch ,setValue,setError,handleSubmit, formState: { errors } } = useForm();
    const [email, setEmail] = useState(); 
    const [name, setName] = useState(''); 
    const [phone, setPhone] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [formValues, setFormValues] = useState({
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    }); 
    const handleInputChange = (field, value) => {
      setFormValues({ ...formValues, [field]: value });
      setValue(field, value, { shouldValidate: true });
    };
    const onSubmit = async (data) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    try {
      const response = await axios.post(`${apiUrl}/register`, formValues);
      console.log('Signup successful:', response);
      toast.success('Registration successful!');
    }
    catch (error) {
        console.error('Signup error:', error);
        toast.error('Registration failed. Please try again.');
    }
    };
      console.log(errors,'hgfds',name)
      const notify = () => toast("Well done!");
      return(
      <section className="signin form-section">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-12 col-lg-6">
                      <div className="sign-content form-fields py-5">
                          <div className="form-logo">
                            <Link to ="/">
                            <img src="/assests/images/logo.png" alt="logo"/></Link>
                            </div>
                  <h2 className="titleone pb10 w-100">Sign Up</h2>
                  <p className="pb50">Already have an account <Link to="/Register Now" className="a-link">Login Now!</Link></p>
                  <form className="form w-100" onSubmit={handleSubmit(onSubmit)}>
                  <div className="input-group mb-3 mb-lg-4 pb-1">
                    <label htmlFor="sign-name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="w-100"
                      id="sign-name"
                      placeholder="Name"
                      name="name"
                      aria-label="Name"
                      value={formValues.name}
                      {...register("name", {
                        required: 'Name is required',
                        maxLength: {
                          value: 10,
                          message: 'Name cannot exceed 10 characters'
                        },
                        pattern: {
                          value: /^[A-Za-z]+$/,
                          message: 'Name must contain only letters'
                        }
                      })}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                  </div>

                  <div className="input-group mb-3 mb-lg-4 pb-1">
                    <label htmlFor="sign-email-id" className="form-label">Email ID</label>
                    <input
                      type="email"
                      name="email"
                      className="w-100"
                      id="sign-email-id"
                      placeholder="Email Address"
                      aria-label="Email Address"
                      value={formValues.email}
                      {...register("email", {
                        required: "Email address is required",
                        validate: {
                          maxLength: v =>
                            v.length <= 50 || "The Email address should have at most 50 characters",
                          matchPattern: v =>
                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email address must be a valid address"
                        }
                      })}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                  </div>

                <div className="input-group mb-3 mb-lg-4 pb-1">
                  <label htmlFor="sign-phone" className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="w-100"
                    id="sign-phone"
                    placeholder="Phone"
                    aria-label="Phone"
                    name="phone"
                    value={formValues.phone}
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^\d{10}$/,
                        message: 'Phone number must be exactly 10 digits'
                      }
                    })}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                  {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                </div>

              <div className="input-group mb-3 mb-lg-4 pb-2">
                <label htmlFor="sign-password" className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-100"
                  id="sign-password"
                  placeholder="Password"
                  aria-label="Password"
                  value={formValues.password}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters long'
                    },
                    pattern: {
                      value: /[!@#$%^&*(),.?":{}|<>]/,
                      message: 'Password must contain at least one special character'
                    }
                  })}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
                {errors.password && <p className="text-danger">{errors.password.message}</p>}
              </div>

            <div className="input-group mb-3 mb-lg-4 pb-2">
              <label htmlFor="sign-confirm-password" className="form-label">Confirm Password</label>
              <input
                type="password"
                className="w-100"
                id="sign-confirm-password"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
                value={formValues.confirmPassword}
                {...register('confirmPassword', {
                  required: 'Confirm Password is required',
                  validate: value => value === watch('password') || 'Passwords and confirm password must be same'
                })}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
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
            <ToastContainer />
    </section>
    )
}

export default Signup;  