import React from 'react';

//css
import './TableRow.css';
const TableRow = ({ products, index }) => {
    const { name, description, price, _id } = products;

    //DELETE order
    const handleDeleteProduct = (event, id) => {
        const proceed = window.confirm('Are you sure, You want to delete Products')
        if (proceed) {
            const url = `http://localhost:7000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result) {
                        event.target.parentNode.style.display = "none";
                    }
                });
        }

    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{description.slice(0, 100)}</td>
            <td>{price}</td>
            <td>
                <button
                    onClick={(event) => handleDeleteProduct(event, _id)}
                    className="btn-delete"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default TableRow;