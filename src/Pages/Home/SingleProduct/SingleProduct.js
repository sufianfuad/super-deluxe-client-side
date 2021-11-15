import React from 'react';
import { Link } from 'react-router-dom';
//react font awesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
//css
import './SingleProduct.css';
const SingleProduct = ({ product }) => {
    const { _id, name, img, description, price } = product;
    // react font awesome
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="col-lg-3 col-md-3 col-12">
            <div className="product-card">
                <div className="part-one">
                    <div className="product-img">
                        <img src={img} alt="" />
                    </div>
                </div>
                {/* <hr /> */}
                <div className="part-two mt-2">
                    {/* fan products info */}
                    <div className="product-info">
                        <h4 className="animate__animated animate__swing">{name}</h4>
                        <p><span className="product-price">Price ${price}</span><small>/piece</small> </p>
                        <p>{description.slice(0, 115)}</p>
                        <div className="p-2">
                            <Link to={`/placeOrder/${_id}`}>
                                <button className="btn purchase-btn
                         px-3 py-2 w-100"><span className="icons px-1">{cartIcon}</span>PURCHASE NOW</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;