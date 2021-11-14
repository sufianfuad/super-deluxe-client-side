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

    //DELETE order
    // const handleDeleteProduct = id => {
    //     const proceed = window.confirm('Are you sure, You want to delete Products')
    //     if (proceed) {
    //         const url = `https://stormy-brook-79826.herokuapp.com/products/${id}`;
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     alert('Deleted Successfully')
    //                     const remainingProduct = manageProduct.filter(products => products._id !== id);
    //                     setManageProduct(remainingProduct);
    //                 }
    //             });
    //     }

    // }
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




// {
//     manageProduct.map(products => <div
//         key={products.id}
//         products={products}
//     >
//         <div className="row container d-flex align-items-center">
//             <div className="col-md-4">
//                 <div className="products">
//                     <div className="row container d-flex align-items-center">
//                         <div className="col-md-6">
//                             <div>
//                                 <img src={products.img} alt="" />
//                             </div>
//                         </div>
//                         <div className="col-md-6">
//                             <div className="product-info">
//                                 <h4>{products?.name}</h4>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="col-md-4">
//                 <button className="w-25">Delete</button>
//             </div>

//         </div>

//     </div>)
// }