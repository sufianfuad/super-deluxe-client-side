import React from 'react';
import { Link } from 'react-router-dom';

//css
import './SingleProduct.css'
const SingleProduct = ({ product }) => {
    const { name, img, description, price } = product;
    return (
        <div className="col-lg-3 col-md-3 col-12">
            <div className="product-card text-center">
                <div className="product-img">
                    <img src={img} alt="" />
                </div>
                {/* travel Offers info */}
                <div className="product-info">
                    <h4>{name}</h4>
                    <p><span className="product-price">Price ${price}</span></p>
                    <p>{description}</p>
                </div>
                <div className="purchase-btn p-2">
                    <Link to="/placeOrder">
                        <button className="btn btn-warning fw-bold
                         px-3 py-2 purchase-btn">PURCHASE NOW</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default SingleProduct;