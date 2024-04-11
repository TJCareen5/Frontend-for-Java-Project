import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/*
 * DeleteBook component that deletes a book by ISBN
 */
function DeleteBook() {
  const [isbn, setIsbn] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8080/api/v1/books/${isbn}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          alert('Book deleted successfully');
        } else {
          alert('Failed to delete book');
        }
      })
      .catch(error => {
        alert('Error deleting book ', error);
      });
  };

  return (
    <div>
      <h2>Delete Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
        <button type="submit">Delete Book</button>
      </form>
      <ul>
        <li><Link to="/">Return to Main Page</Link></li>
      </ul>
    </div>
  );
}

export default DeleteBook;