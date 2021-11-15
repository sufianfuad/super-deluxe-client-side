import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

//css
import './ManageAllOrder.css';

const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([]);
    //status state 
    const [status, setStatus] = useState('');
    //order state
    const [orderId, setOrderId] = useState('');

    const { register, handleSubmit } = useForm();
    // react font awesome
    const dltIcon = <FontAwesomeIcon icon={faTrashAlt} />

    const handleOrderId = id => {
        setOrderId(id);
    }

    useEffect(() => {
        fetch('https://stormy-brook-79826.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);
    console.log(allOrders);
    //update order
    const onSubmit = data => {
        console.log(data, orderId)
        fetch(`https://stormy-brook-79826.herokuapp.com/updateStatus/${orderId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                setStatus(result);
            })

    };
    //DELETE order
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, You want to delete Customer order')
        if (proceed) {
            const url = `https://stormy-brook-79826.herokuapp.com/orders/${orderId}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainingOrder = allOrders.filter(order => order._id !== id);
                        setAllOrders(remainingOrder);
                    }
                });
        }

    }
    return (
        <div className="manageAllOrder-container">
            <div className="container">
                <h2 className="allOrder-title pb-3">Orders Available: {allOrders.length}</h2>
                <div className="allOrder-table">
                    {/* all order list */}
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {allOrders?.map((order, index) => (
                            <tbody>
                                <tr>
                                    <td>{index}</td>
                                    <td>{order?.name}</td>
                                    <td>{order?.email}</td>
                                    <td>{order?.price}</td>
                                    <td>{order?.phone}</td>
                                    <td>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <select onClick={() => handleOrderId(order?._id)} {...register("status")}>
                                                <option value={order?.status}>{order?.status}</option>
                                                <option value="on-going">On-going</option>
                                                <option value="done">Done</option>
                                            </select>
                                            <input type="submit" />
                                        </form>
                                    </td>
                                    <button
                                        onClick={() => handleDeleteOrder(order?._id)}
                                        className="btn btn-danger delete-btn px-3 py-2"><span className="icon px-1">{dltIcon}</span></button>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrder;