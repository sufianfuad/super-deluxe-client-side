import React from 'react';
import { Link } from 'react-router-dom';

import error from '../../images/404-not-found.png';
//css
import './ErrorFound.css';
const ErrorFound = () => {
    return (
        <div className="error-container text-center">
            <div className="error-img">
                <img src={error} alt="" />
            </div>
            <Link to="/home">
                <button className="btn purchase-btn px-3 py-2">Back Home</button>
            </Link>
        </div>
    );
};

export default ErrorFound;