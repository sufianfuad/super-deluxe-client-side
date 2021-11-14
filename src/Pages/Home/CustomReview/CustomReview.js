import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleReview from '../SingleReview/SingleReview';
//css
import './CustomReview.css'
const CustomReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:7000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="customReview-container">
            <div className="text-center pb-3">
                <div className="product-title">
                    <h3 className="animate__animated animate__backInDown">Our Valuable Client Reviews</h3>
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
                        <div className="row container">
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