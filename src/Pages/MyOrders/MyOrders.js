import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();

    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:7000/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user?.email]);

    return (
        <div className="myOrder-container">
            <div className="container">
                <h2 className="text-center pb-3">My Orders Here: {order.length}</h2>
                {user.email &&
                    <div className="pb-3">
                        {/* my order list in a table */}
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Price</th>
                                    <th>Address</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            {order?.map((pd, index) => (
                                <tbody>
                                    <tr>
                                        <td>{index}</td>
                                        <td>{pd?.name}</td>
                                        <td>{pd?.email}</td>
                                        <td>{pd?.price}</td>
                                        <td>{pd?.address}</td>
                                        <td><span className="status">{pd?.status}</span></td>
                                        <button
                                            // onClick={() => handleDeleteOrder(order._id)}
                                            className="btn btn-danger delete-btn px-3 py-2">Delete</button>
                                        <Link to={`/orders/update/${order._id}`}>
                                            <button
                                                onClick=""
                                                className="btn btn-success px-3 py-2">Update</button>
                                        </Link>

                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                    </div>
                }

            </div>
        </div>
    );
};

export default MyOrders;