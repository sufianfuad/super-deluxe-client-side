import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
//img
import loginBanner from '../../images/login-banner/login.jpg';
//useAuth hooks
import useAuth from '../../hooks/useAuth';
//css
import './Register.css';
import { Alert, Spinner } from 'react-bootstrap';
const Register = () => {

    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginUserData = { ...loginData };
        newLoginUserData[field] = value;
        console.log(newLoginUserData)
        setLoginData(newLoginUserData)

    }
    const handleLoginSubmit = (e) => {
        if (loginData?.password !== loginData?.password2) {
            alert('Your password did not match');
            return;
        }
        registerUser(loginData?.email, loginData?.password, loginData?.name, history);
        e.preventDefault();
    }
    return (
        <div className="register-container">
            <h2 className="text-center login-text">Please Create Account</h2>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="login-banner">
                            <img src={loginBanner} alt="" />
                        </div>
                    </div>
                    {/* registration form */}
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="loginForm-container">
                            {!isLoading &&
                                <form
                                    onSubmit={handleLoginSubmit}
                                    className="w-75 mx-auto">
                                    <div class="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your Name</label>
                                        <input
                                            name="name"
                                            onBlur={handleOnBlur}
                                            className="form-control"
                                            placeholder="Enter your Name"
                                            required
                                        />
                                    </div>
                                    {/* === */}
                                    <div class="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your Email</label>
                                        <input
                                            name="email"
                                            type="email"
                                            onBlur={handleOnBlur}
                                            className="form-control"
                                            placeholder="Enter your Email"
                                            required
                                        />
                                    </div>
                                    {/* === */}
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            onBlur={handleOnBlur}
                                            className="form-control"
                                            placeholder="password at least 6 digit"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="formGroupExampleInput" className="form-label fw-bold">ReType Password</label>
                                        <input
                                            type="password"
                                            name="password2"
                                            onBlur={handleOnBlur}
                                            className="form-control"
                                            placeholder="Confirm Password"
                                        />
                                    </div>

                                    {/* == */}
                                    <div>
                                        <button
                                            // onClick={handleLogIn}
                                            type="submit" className="btn click-btn fw-bold btn-lg logIn-btn w-100">Register</button>

                                    </div>
                                    <Link
                                        to="/login">
                                        <a href="">Already Register? Login Please</a>
                                        {/* <button type="text" className="btn btn-primary text-center">New In Super Deluxe? Create A Account</button> */}
                                    </Link>
                                </form>
                            }
                            {
                                isLoading && <div className="text-center">
                                    <Spinner animation="border" />
                                </div>
                            }
                            {
                                user?.email && <Alert variant="success">
                                    Successfully Create Your Account
                                </Alert>
                            }
                            {
                                authError && <Alert variant="danger">
                                    {authError}
                                </Alert>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;