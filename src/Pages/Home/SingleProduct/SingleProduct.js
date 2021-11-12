import React from 'react';
import { Link } from 'react-router-dom';

//css
import './SingleProduct.css'
const SingleProduct = ({ product }) => {
    const { _id, name, img, description, price } = product;
    return (
        <div className="col-lg-3 col-md-3 col-12">
            <div className="product-card text-center">
                <div className="part-one">
                    <div className="product-img">
                        <img src={img} alt="" />
                    </div>
                </div>
                <hr />
                <div className="part-two mt-2">
                    {/* fan products info */}
                    <div className="product-info">
                        <h4>{name}</h4>
                        <p><span className="product-price">Price ${price}</span><small>/peace</small> </p>
                        <p>{description.slice(0, 115)}</p>
                        <div className="purchase-btn p-2">
                            <Link to={`/placeOrder/${_id}`}>
                                <button className="btn btn-warning fw-bold
                         px-3 py-2">PURCHASE NOW</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SingleProduct;