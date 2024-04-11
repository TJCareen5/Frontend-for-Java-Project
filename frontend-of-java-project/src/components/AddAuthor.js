import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Component that allows adding a new author
 * @returns {Element}
 * @constructor
 */
function AddAuthor() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    /*
    * Function that handles form submission
    */
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            firstName,
            lastName
        };

        fetch(`http://localhost:8080/api/v1/authors?firstName=${firstName}&lastName=${lastName}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    alert("Author added")
                } else {
                    alert('Failed to add author');
                }
            })
            .catch(error => {
                alert('Error adding author ', error);
            });
    };

    return (
        <div className="container">
            <h2>Add Author</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Add Author</button>
            </form>
            <ul className="mt-3">
                <li><Link to="/" className="btn btn-secondary">Return to Main Page</Link></li>
            </ul>
        </div>
    );
}

export default AddAuthor;