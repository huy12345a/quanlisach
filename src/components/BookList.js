import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBooks, deleteBook } from '../api';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then((response) => {
            setBooks(response.data);
        }).catch((err) => {
            alert('Error fetching books');
        });
    }, []);

    const handleDelete = (id) => {
        deleteBook(id).then(() => {
            alert('Delete successful');
            setBooks(books.filter((book) => book.id !== id));
        }).catch((err) => {
            alert('Delete failed');
        });
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Library</h1>
            <Link to="/add">
                <button className="btn btn-primary mb-4">Add a new Book</button>
            </Link>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <Link to={`/edit/${book.id}`}>
                                <button className="btn btn-warning me-2">Edit</button>
                            </Link>
                            <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookList;
