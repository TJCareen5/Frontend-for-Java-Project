import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/*
 * DeleteAuthor component that deletes an author by ID
 */
function DeleteAuthor() {
    const [authorId, setAuthorId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:8080/api/v1/authors/${authorId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    alert('Author deleted successfully');
                } else {
                    alert('Failed to delete author');
                }
            })
            .catch(error => {
                alert('Error deleting author ', error);
            });
    };

    return (
        <div>
            <h2>Delete Author</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Author ID" value={authorId} onChange={(e) => setAuthorId(e.target.value)} required />
                <button type="submit">Delete Author</button>
            </form>
            <ul>
                <li><Link to="/">Return to Main Page</Link></li>
            </ul>
        </div>
    );
}

export default DeleteAuthor;