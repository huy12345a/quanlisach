import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../api';

function AddBook() {
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState('');
    const navigate = useNavigate();

    const handleAdd = () => {
        const newBook = { title, quantity };


        addBook(newBook).then(() => {
            alert('Book added successfully');
            setTitle('');
            setQuantity('')
            navigate('/');
        }).catch((err) => {
            alert('Error adding book');
        });
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Add a New Book</h1>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                    type="text"
                    id="title"
                    className="form-control"
                    placeholder="Enter book title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Quantity</label>
                <input
                    type="number"
                    id="quantity"
                    className="form-control"
                    placeholder="Enter book quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <button className="btn btn-success" onClick={handleAdd}>Add</button>
        </div>
    );
}

export default AddBook;
