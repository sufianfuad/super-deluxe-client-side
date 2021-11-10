import React, { useEffect, useState } from 'react';

import { Spinner } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';
//css
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="product-container">
            <div className="text-center pb-3">
                <div className="product-title">
                    <h3>Choose Your Fan And Purchase</h3>
                    <h4 className="animate__animated animate__bounce"></h4>
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
                        <div className="row g-4">
                            {
                                products.map(product => <SingleProduct
                                    key={product.id}
                                    product={product}
                                ></SingleProduct>)
                            }
                        </div>
                }

            </div>

        </div>
    );
};

export default Products;