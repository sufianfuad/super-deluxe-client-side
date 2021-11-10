import React from 'react';
import { Link } from 'react-router-dom';

//use Firebase import
import useFirebase from '../../../hooks/useFirebase';
//image 
import loginBanner from '../../../images/login-banner/login.jpg';
//==

//css
import './Login.css';

const Login = () => {
    const { user, signInUsingGoogle } = useFirebase();

    // handle event for Google
    const handleGoogleLogin = () => {
        signInUsingGoogle();
    }
    return (
        <div className="login-container">
            <h2 className="text-center">Login Please</h2>
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
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput" className="form-label fw-bold">Your Password</label>

                                    <input
                                        // onBlur={handlePassword}
                                        type="text" className="form-control" placeholder="password at least 6 digit" required />
                                </div>
                                <div>
                                    <button
                                        // onClick={handleLogIn}
                                        type="submit" className="btn btn-primary fw-bold btn-lg logIn-btn w-100">LogIn</button>
                                </div>
                                <p className="text-center">New In Super Deluxe? Create A Account</p>
                                <Link to="/register">
                                    <button className="btn btn-primary text-center">Register</button>
                                </Link>
                            </form>

                            <p className="text-center py-3">---------------------</p>
                            <div className="google-btn text-center mt-2">
                                <button
                                    onClick={handleGoogleLogin}
                                    className="btn btn-warning px-3 py-2 fw-bold"
                                >SIgn In With Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Login;