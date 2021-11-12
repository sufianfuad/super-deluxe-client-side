import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';

import Reviews from '../Reviews/Reviews';
//css
import './Home.css';

const Home = () => {

    const [homeProduct, setHomeProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:7000/products')
            .then(res => res.json())
            .then(data => setHomeProduct(data))
    }, [])

    return (
        <>
            {/* <Navigation></Navigation> */}
            <Banner></Banner>
            <div className="home-product container">
                <div className="row">
                    <h2 className="product-title text-center mt-5">Choose Your Fan <span className="title-color">And Purchase</span></h2>
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
                                                    <h6>Price: $<span className="price">{product?.price}</span><small>/peace</small></h6>
                                                    <p><small>{product?.description.slice(0, 115)}</small></p>
                                                    <div className="purchase-btn p-2">
                                                        <Link to="/placeOrder">
                                                            <button className="btn btn-warning fw-bold px-3 py-2">PURCHASE NOW</button>
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
            <Reviews></Reviews>
        </>
    );
};

export default Home;