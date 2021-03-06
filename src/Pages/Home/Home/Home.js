import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//react font awesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
//==
import Banner from '../Banner/Banner';
import CustomReview from '../CustomReview/CustomReview';
import TeamMember from '../TeamMember/TeamMember';
//css
import './Home.css';

const Home = () => {

    const [homeProduct, setHomeProduct] = useState([])
    // react font awesome
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    useEffect(() => {
        fetch('https://stormy-brook-79826.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setHomeProduct(data))
    }, [])

    return (
        <>
            {/* <Navigation></Navigation> */}
            <Banner></Banner>
            <div className="homeProduct-container">
                <div className="home-product container">
                    <div className="row">
                        <div className="text-center pb-3">
                            <div className="hading-title">
                                <h3 className="products-title">Our Products</h3>
                                <h6 className="animate__animated animate__bounce mt-3">Choose Your Fan And Purchase</h6>
                            </div>
                        </div>
                        {
                            //show six product 
                            homeProduct.slice(0, 6).map(product =>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="row d-flex align-items-center">
                                            <div className="col-md-5">
                                                <div className="">
                                                    <div className="product-img">
                                                        <img className="img-fluid" src={product?.img} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="">
                                                    <div className="details">
                                                        <h4>{product?.name}</h4>
                                                        <h6>Price: $<span className="price">{product?.price}</span><small>/piece</small></h6>
                                                        <p><small>{product?.description.slice(0, 115)}</small></p>
                                                        <div className="p-2">
                                                            <Link to="/placeOrder">
                                                                <button className="btn purchase-btn fw-bold px-3 py-2"><span className="icons px-1">{cartIcon}</span>PURCHASE NOW</button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <TeamMember></TeamMember>
            <CustomReview></CustomReview>
        </>
    );
};

export default Home;