import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleReview from '../SingleReview/SingleReview';
//css
import './CustomReview.css'
const CustomReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://stormy-brook-79826.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="customReview-container">
            <div className="text-center pb-3">
                <div className="product-title">
                    <h3 className="animate__animated animate__backInDown review-title products-title mb-5">Our Customer Say</h3>
                </div>
            </div>
            <div className="container">
                {/* spinner loading */}
                {
                    reviews.length === 0 ?
                        <div className="spinner">
                            <Spinner animation="border" />
                        </div>
                        :
                        <div className="row container reviews g-4">
                            {
                                reviews.map(review =>
                                    <SingleReview
                                        key={review._id}
                                        review={review}
                                    ></SingleReview>
                                )
                            }
                        </div>
                }

            </div>
        </div>
    );
};

export default CustomReview;