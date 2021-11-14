import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-bootstrap';
//css
import './MakeAdmin.css';
const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false)
    const { register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const onSubmit = data => {
        const user = { email }
        fetch('http://localhost:7000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (data.modifiedCount) {
                    reset();
                    setAdminSuccess(true);
                }
            })
        // console.log(data)

    };
    return (
        <div className="makeAdmin-container">
            <h4 className="text-center text">Make Admin</h4>
            <div className="form-area mt-5">
                <div className="form-container container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("Email")}
                            onBlur={handleOnBlur}
                            placeholder="example@gmail.com"
                            className="p-2 m-2 w-50 inputs-field"
                        />
                        {/*  */}
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input
                            type="submit"
                            value="Make as Admin"
                            className="btn add-btn w-50 px-3 py-2"
                        />
                    </form>
                    {
                        adminSuccess && <Alert variant="success">
                            Added You Admin Successfully!
                        </Alert>
                    }
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;