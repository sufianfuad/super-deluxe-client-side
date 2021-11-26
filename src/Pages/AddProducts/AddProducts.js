import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
//css
import './AddProducts.css';
import addProduct from '../../images/login-banner/addProduct.jpg';
const AddProducts = () => {

  //from react hook useFrom
  const { register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    console.log(data)
    axios.post('https://stormy-brook-79826.herokuapp.com/products', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('Successfully Added');
          reset();
        }
      })
  };
  return (
    <div className="addProduct-container">
      <h1 className="mt-5 text-center heading-title">Please Add Product<span className="dot-color">.</span></h1>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="">
              <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("name")}
                    placeholder="Name"
                    className="p-2 m-2 inputs-field"
                  />

                  <input
                    {...register("description")}
                    placeholder="Description"
                    className="p-2 m-2  inputs-field"
                  />

                  <input
                    {...register("image", { required: true })}
                    placeholder="Image Link"
                    className="p-2 m-2 inputs-field"
                  />

                  <input
                    {...register("price", { required: true })}
                    placeholder="Price"
                    type="number"
                    className="p-2 m-2 inputs-field"
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
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="add-img">
              <img src={addProduct} alt="" />
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default AddProducts;