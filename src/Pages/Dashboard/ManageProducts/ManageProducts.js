import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import TableRow from '../../TableRow/TableRow';

//css
import './ManageProducts.css';
const ManageProducts = () => {
    const [manageProduct, setManageProduct] = useState([]);

    // const [pdId, setPdId] = useState('')

    useEffect(() => {
        fetch('https://stormy-brook-79826.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    }, []);
    return (
        <div className="ManageProducts-container">
            <div className="container">
                <div className="dash-content-top">
                    <h1>Manage Products</h1>
                </div>
                <div className="manage-box">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Product Name</th>
                                <th>Product Text</th>
                                <th>Product Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {manageProduct.length === 0 ? (
                                <tr>
                                    <td className="text-center" colSpan="5">
                                        Loading...
                                    </td>
                                </tr>
                            ) : (
                                manageProduct.map((products, index) => (
                                    <TableRow index={index} key={products._id} products={products} />
                                ))
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>

        </div>
    );
};

export default ManageProducts;
