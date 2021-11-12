import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
//css
import './AddProducts.css'
const AddProducts = () => {

  const { register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    console.log(data)
    axios.post('http://localhost:7000/products', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('Successfully Added');
          reset();
        }
      })
  };
  return (
    <div className="addProduct-container">
      <div>
        <h1 className="mt-5 text-center text-danger">Please Add Services</h1>
        <div className=" w-25 m-auto mt-5">

          <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="Name"
                className="p-2 m-2 w-100 inputs-field"
              />

              <input
                {...register("description")}
                placeholder="Description"
                className="p-2 m-2 w-100 inputs-field"
              />

              <input
                {...register("image", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2 w-100 inputs-field"
              />

              <input
                {...register("price", { required: true })}
                placeholder="Price"
                type="number"
                className="p-2 m-2 w-100 inputs-field"
              />
              {/*  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Add"
                className="btn add-btn w-100 px-3 py-2"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;