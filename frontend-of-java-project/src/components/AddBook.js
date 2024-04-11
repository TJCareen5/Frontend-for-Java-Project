import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Component that allows the user to add a book
 * @returns {Element}
 * @constructor
 */
function AddBook() {
    const [isbn, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [editionNumber, setEditionNumber] = useState('');
    const [copyright, setCopyright] = useState('');
    const [authorId, setAuthorId] = useState('');

    /*
     * Function that handles the form submission
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            isbn,
            title,
            editionNumber,
            copyright,
            author_id: authorId
        };

        fetch(`http://localhost:8080/api/v1/books?isbn=${isbn}&title=${title}&editionNumber=${editionNumber}&copyright=${copyright}&author_id=${authorId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    alert('Book added successfully');
                } else {
                    alert('Failed to add book');
                }
            })
            .catch(error => {
                alert('Error adding book ', error);
            });
    };

    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <input type="number" placeholder="Edition Number" value={editionNumber} onChange={(e) => setEditionNumber(e.target.value)} required />
                <input type="text" placeholder="Copyright" value={copyright} onChange={(e) => setCopyright(e.target.value)} />
                <input type="number" placeholder="Author ID" value={authorId} onChange={(e) => setAuthorId(e.target.value)} required />
                <button type="submit">Add Book</button>
            </form>
            <ul>
                <li><Link to="/">Return to Main Page</Link></li>
            </ul>
        </div>
    );
}

export default AddBook;