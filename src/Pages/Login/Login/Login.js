import React, { useState, useEffect } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useLocation, useHistory } from 'react-router-dom';
//use Auth import
import useAuth from '../../../hooks/useAuth';
//image 
import loginBanner from '../../../images/login-banner/login.jpg';
import GoogleLogo from '../../../images/googlelogo.png';
//==
//css
import './Login.css';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const { user, loginInUser, isLoading, authError, signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginUserData = { ...loginData };
        newLoginUserData[field] = value;
        setLoginData(newLoginUserData)

    }
    const handleLoginSubmit = (e) => {
        loginInUser(loginData?.email, loginData?.password, location, history)
        e.preventDefault()
    }

    // handle event for Google
    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history);
    }
    return (
        <div className="login-container">
            <h2 className="text-center login-text">Login Please<span className="dot-color">.</span></h2>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <div className="login-banner">
                            <img src={loginBanner} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="loginForm-container">
                            <form
                                onSubmit={handleLoginSubmit}
                                className="w-75 mx-auto">
                                <div class="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                                    <input
                                        name="email"
                                        onBlur={handleOnChange}
                                        className="form-control"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        onBlur={handleOnChange}
                                        className="form-control"
                                        placeholder="password at least 6 digit"
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="btn click-btn fw-bold btn-lg logIn-btn w-100">LogIn</button>
                                </div>
                                <Link
                                    to="/register"
                                >
                                    <a href="">New In Super Deluxe? Create A Account</a>
                                    {/* <button type="text" className="btn btn-primary text-center">New In Super Deluxe? Create A Account</button> */}
                                </Link>
                                {
                                    isLoading && <div className="text-center">
                                        <Spinner animation="border" />
                                    </div>
                                }
                                {
                                    user?.email && <Alert variant="success">
                                        Login Successfully
                                    </Alert>
                                }
                                {
                                    authError && <Alert variant="danger">
                                        {authError}
                                    </Alert>
                                }
                            </form>

                            <p className="text-center py-3">---------------------</p>
                            <div className="login">
                                <div className="container text-center mt-2">
                                    <button
                                        onClick={handleGoogleLogin}
                                        className="btn sign-btn"
                                    ><div className="g-logo-holder">
                                            <img src={GoogleLogo} alt="Google" />
                                        </div>
                                        <div className="sign-text">Sign in with Google</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;