import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookById, updateBook } from '../api';

function EditBook() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState({ title: '', quantity: '' });
    useEffect(() => {
        getBookById(id).then((response) => {
            setBook(response.data);
        }).catch((err) => {
            alert('Error fetching book data');
        });
    }, [id]);

    const handleSave = () => {
        updateBook(id, book).then(() => {
            alert('Book updated successfully');
            navigate('/');
        });
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Edit Book</h1>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                    type="text"
                    id="title"
                    className="form-control"
                    placeholder="Enter book title"
                    value={book.title}
                    onChange={(e) => setBook({ ...book, title: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Quantity</label>
                <input
                    type="number"
                    id="quantity"
                    className="form-control"
                    placeholder="Enter book quantity"
                    value={book.quantity}
                    onChange={(e) => setBook({ ...book, quantity: e.target.value })}
                />
            </div>
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
        </div>
    );
}

export default EditBook;
