import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
//===
import { useParams } from 'react-router';
//css
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { purchaseId } = useParams();
    //===
    const [purchaseDetails, setPurchaseDetails] = useState([])
    //===
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    useEffect(() => {
        fetch('')
    }, [])
    return (
        <div className="placeOrder-container">
            <div className="container">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName", { required: true, maxLength: 20 })} />
                        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                        <input type="number" {...register("age", { min: 18, max: 99 })} />
                        <input type="submit" />
                    </form>
                </div>

            </div>

        </div>
    );
};

export default PlaceOrder;