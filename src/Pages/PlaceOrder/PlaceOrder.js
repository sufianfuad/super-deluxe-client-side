import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
//===
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
//css
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { purchaseId } = useParams();
    const { user } = useAuth();

    const initialInfo = { userName: user.displayName, email: user.email, phone: '' }
    //===
    const [purchaseDetails, setPurchaseDetails] = useState(initialInfo);
    //===
    const { register, handleSubmit, reset } = useForm();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newDetails = { ...purchaseDetails }
        newDetails[field] = value;
        console.log(newDetails);
        setPurchaseDetails(newDetails);
    }

    const onSubmit = data => {
        data.status = 'pending';
        console.log(data)
        fetch('http://localhost:7000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your Order successfully processed')
                    reset();
                }
            })
    };

    //data load
    useEffect(() => {
        fetch(`http://localhost:7000/products/${purchaseId}`)
            .then(res => res.json())
            .then(data => setPurchaseDetails(data))
    }, []);
    return (
        <div className="placeOrder-container">
            <div className="container">
                <h2 className="text-center">Welcome, You can order your valuable product</h2>
                <div className="row d-flex align-items-center">
                    <div className="clo-lg-6 col-md-6 col-12">
                        <div className="details-container">
                            <div className="placeOrder-details">
                                <div className="order-img text-center">
                                    <img src={purchaseDetails?.img} alt="" />
                                </div>
                                <div className="details p-2">
                                    <h4>{purchaseDetails?.name}</h4>
                                    <p><span className="price-color">Price ${purchaseDetails?.price}</span><small>/piece</small> </p>
                                    <p>{purchaseDetails?.description}</p>
                                    <Link to="/home">
                                        <button className="btn purchase-btn fw-bold px-3 py-2">Choose More</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="details-container">
                            <div className="order-box">
                                <h5 className="title-color text-center"></h5>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* input fields */}
                                    <input
                                        name="userName"
                                        onBlur={handleOnBlur}
                                        defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />

                                    <input
                                        name="email"
                                        onBlur={handleOnBlur}
                                        defaultValue={user?.email} {...register("email")} placeholder="Give your Email" />

                                    <input
                                        defaultValue={purchaseDetails?.name}
                                        type="text" {...register("product_name")} placeholder="Product Name" />

                                    <input
                                        defaultValue={purchaseDetails?.price}
                                        {...register("price")} type="number" />

                                    <input
                                        name="address"
                                        type="text" {...register("Address")} placeholder="Your Address" />
                                    <input
                                        name="phone"
                                        onBlur={handleOnBlur}
                                        type="text" {...register("Phone")} placeholder="Your phone number" />

                                    {/* <input type="submit" value="Place Order" /> */}
                                    <button
                                        className="btn add-btn mt-3 px-3 py-2 w-50"
                                        type="submit">Order Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;