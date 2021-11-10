import React from 'react';
import { Link } from 'react-router-dom';

import loginBanner from '../../images/login-banner/login.jpg';
//css
import './Register.css';
const Register = () => {
    return (
        <div className="register-container">
            <h2 className="text-center">Create Account</h2>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <div className="login-banner">
                            <img src={loginBanner} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-container">
                            <form className="w-75 mx-auto">
                                <div class="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your Name</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your Name" required />
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Password</label>

                                    <input
                                        // onBlur={handlePassword}
                                        type="password" className="form-control" placeholder="password at least 6 digit" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Password</label>

                                    <input
                                        // onBlur={handlePassword}
                                        type="password" className="form-control" placeholder="Confirm Password" />
                                </div>
                                <div>
                                    <button
                                        // onClick={handleLogIn}
                                        type="submit" className="btn btn-primary fw-bold btn-lg logIn-btn w-100">Register</button>

                                </div>
                                <p className="text-center">Already have A Account</p>
                                <Link to="/login">
                                    <button className="btn btn-primary text-center">Login</button>
                                </Link>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;