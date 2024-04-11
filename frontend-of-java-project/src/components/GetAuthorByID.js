import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/*
 * GetAuthorByID component that gets an author by ID
 */
function GetAuthorByID() {
    const [authorId, setAuthorId] = useState('');
    const [author, setAuthor] = useState(null);
    
    /*
    * Function that handles form submission
    */    
    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:8080/api/v1/authors/${authorId}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else{
                throw new Error('Author not found');
                }
            })
            .then(data => {
                setAuthor(data);
            })
            .catch(error => {
                alert('Error when getting author ', error);
            });
    };

    return (
        <div>
            <h2>Get Author by Author ID</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" placeholder="Author ID" value={authorId} onChange={(e) => setAuthorId(e.target.value)} required />
                <button type="submit">Get Author</button>
            </form>
            {author && (
                <div>
                    <h3>Author</h3>
                    <p>Author ID: {author.id}</p>
                    <p>First Name: {author.firstName}</p>
                    <p>Last Name: {author.lastName}</p>
                </div>
            )}
            <ul>
                <li><Link to="/">Return to Main Page</Link></li>
            </ul>
        </div>
    );
}

export default GetAuthorByID;