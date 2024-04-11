import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/*
 * EditAuthor component that allows the user to edit an author
 */
function EditAuthor() {
    const [authorId, setAuthorId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            firstName,
            lastName
        };

        fetch(`http://localhost:8080/api/v1/authors/${authorId}?&firstName=${firstName}&lastName=${lastName}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    alert('Author updated successfully');
                } else {
                    alert('Failed to update author');
                }
            })
            .catch(error => {
                alert('Error updating author ', error);
            });
    };

    return (
        <div>
            <h2>Edit Author</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Author ID" value={authorId} onChange={(e) => setAuthorId(e.target.value)} required />
                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <button type="submit">Update Author</button>
            </form>
            <ul>
                <li><Link to="/">Return to Main Page</Link></li>
            </ul>
        </div>
    );
}

export default EditAuthor;