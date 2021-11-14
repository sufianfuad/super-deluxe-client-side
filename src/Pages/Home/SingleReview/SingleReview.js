import React from 'react';
import { Link } from 'react-router-dom';
//css
import './SingleReview.css';
const SingleReview = ({ review }) => {
    const { name, email, rating, comment } = review;
    return (
        <div className="col-lg-3 col-md-3 col-12">
            <div className="">
                <div className="review-box text-center" >
                    <div className="review-info">
                        <h4>{name}</h4>
                        <p className="card-text">{email}.</p>
                        <p>{rating}.2k Rate</p>
                        <h5>{comment}</h5>
                        <Link>
                            <button className="btn purchase-btn px-3 py-2 fw-bold">
                                Visit Profile
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        // <div className="col-lg-3 col-md-3 col-12">
        //     <div className="review-box">
        //         <div className="review-info">
        //             <h4>Client: {name}</h4>
        //             <p>{email}</p>
        //             <p>{rating}</p>
        //             <h5>{comment}</h5>
        //         </div>
        //     </div>
        // </div>
    );
};

export default SingleReview;