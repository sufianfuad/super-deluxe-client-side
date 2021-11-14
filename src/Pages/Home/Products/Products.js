import React, { useEffect, useState } from 'react';

import { Spinner } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';
//css
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="products-container">
            <div className="text-center pb-3">
                <div>
                    <h3 className="products-title">Our Products</h3>
                    <h6 className="animate__animated animate__bounce mt-3">Choose Your Fan And Purchase</h6>
                </div>
            </div>
            <div className="container">
                {/* spinner loading */}
                {
                    products.length === 0 ?
                        <div className="spinner">
                            <Spinner animation="border" />
                        </div>
                        :
                        <div >
                            <div className="row g-4">
                                {
                                    products.map(product => <SingleProduct
                                        key={product.id}
                                        product={product}
                                    ></SingleProduct>)
                                }

                            </div>
                        </div>
                }

            </div>

        </div>
    );
};

export default Products;