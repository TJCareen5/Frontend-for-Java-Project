import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/*
 * GetBookByISBN component that fetches a book by ISBN
 */
function GetBookByISBN() {
    const [isbn, setIsbn] = useState('');
    const [book, setBook] = useState(null);

    /*
    * Function that handles form submission
    */    
    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:8080/api/v1/books/${isbn}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Book not found');
            })
            .then(data => {
                setBook(data);
            })
            .catch(error => {
                alert('Error getting book ', error);
            });
    };

    return (
        <div>
            <h2>Get Book by ISBN</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
                <button type="submit">Get Book</button>
            </form>
            {book && (
                <div>
                    <h3>Book Details</h3>
                    <p>ISBN: {book.isbn}</p>
                    <p>Title: {book.title}</p>
                    <p>Edition Number: {book.editionNumber}</p>
                    <p>Copyright: {book.copyright}</p>
                    <p>Authors: 
                        {book.authorList.map(author => (
                        <span key={author.id}>{author.firstName} {author.lastName}, </span>
                        ))}
                    </p>
                </div>
            )}
            <ul>
                <li><Link to="/">Return to Main Page</Link></li>
            </ul>
        </div>
    );
}

export default GetBookByISBN;