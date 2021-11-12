import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
//css
import './Reviews.css';
const Reviews = () => {
    const { user } = useAuth();
    const { register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:7000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Added');
                    reset();
                }
            })
    };
    return (
        <div className="reviews-container">
            <div className="form-container container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register("name")}
                        value={user?.displayName}
                        placeholder="Name"
                        className="p-2 m-2 w-50 inputs-field"
                    />
                    <input
                        {...register("email")}
                        value={user?.email}
                        placeholder="Email"
                        type="email"
                        className="p-2 m-2 w-50 inputs-field"
                    />

                    <textarea
                        {...register("comment")}
                        placeholder="FeedBack Please"
                        className="p-2 m-2 w-50 inputs-field"
                    />
                    <input
                        {...register("rating", { required: true })}
                        placeholder="Rate us only(0-5) number"
                        type="number"
                        className="p-2 m-2 w-50 inputs-field"
                    />
                    {/*  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input
                        type="submit"
                        value="Add"
                        className="btn add-btn w-50 px-3 py-2"
                    />
                </form>
            </div>
        </div>
    );
};

export default Reviews;