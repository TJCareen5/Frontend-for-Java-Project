import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/*
* BookList component that fetches and displays all books
*/
function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/books');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      alert(error.message);
    }
  };
  
    return (
        <div>
          <style>{`table, th, td {  border: 2px solid black;
          border-collapse}
          th,
          td{padding: 15px}
          th {
            text-align: center;
          }`}</style>
        <h2>Book List</h2>
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>ISBN</th>
                <th>Edition Number</th>
                <th>Copyright</th>
                <th>Authors</th>
            </tr>
            </thead>
            <tbody>
            {books.map((book) => (
                <tr key={book.isbn}>
                <td>{book.title}</td>
                <td>{book.isbn}</td>
                <td>{book.editionNumber}</td>
                <td>{book.copyright}</td>
                <td>
                    {book.authorList.map((author, index) => (
                    <span key={author.id}>
                        {author.firstName} {author.lastName}
                        {index !== book.authorList.length - 1 && ', '}
                    </span>
                    ))}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        <ul>
            <li><Link to="/">Return to Main Page</Link></li>
        </ul>
    </div>
  );
}

export default BookList;