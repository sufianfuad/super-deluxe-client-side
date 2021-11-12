import React from 'react';
//css
import './SingleReview.css';
const SingleReview = ({ review }) => {
    const { name, email, rating, comment } = review;
    return (
        <div className="col-lg-3 col-md-3 col-12">
            <div className="review-cart">
                <div className="review-info">
                    <h4>Client: {name}</h4>
                    <h6>{email}</h6>
                    <p>{rating}</p>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;