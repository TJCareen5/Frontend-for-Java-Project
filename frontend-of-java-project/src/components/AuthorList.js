import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * AuthorList component that fetches and displays all authors
 */
function AuthorList() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/authors')
            .then(response => response.json())
            .then(data => setAuthors(data))
            .catch(error => alert('Error fetching authors ', error));
    }, []);

    return (
        <div>
            <h2>All Authors</h2>
            <ul>
                {authors.map(author => (
                    <li key={author.id}>{author.firstName} {author.lastName}</li>
                ))}
            </ul>
            <ul>
                <li><Link to="/">Return to Main Page</Link></li>
            </ul>
        </div>
    );
}

export default AuthorList;