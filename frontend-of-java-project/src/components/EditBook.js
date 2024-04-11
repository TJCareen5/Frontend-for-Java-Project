import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/*
 * EditBook component that updates a book by ISBN
 */
function EditBook() {
  const [isbn, setIsbn] = useState('');
  const [title, setTitle] = useState('');
  const [editionNumber, setEditionNumber] = useState('');
  const [copyright, setCopyright] = useState('');
  const [authorId, setAuthorId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      isbn,
      title,
      editionNumber: parseInt(editionNumber),
      copyright,
      author_id: parseInt(authorId)
    };

    fetch(`http://localhost:8080/api/v1/books/${isbn}?&title=${title}&editionNumber=${editionNumber}&copyright=${copyright}&author_id=${authorId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          alert('Book updated successfully');
        } else {
          alert('Failed to update book');
        }
      })
      .catch(error => {
        alert('Error updating book ', error);
      });
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="number" placeholder="Edition Number" value={editionNumber} onChange={(e) => setEditionNumber(e.target.value)} />
        <input type="text" placeholder="Copyright" value={copyright} onChange={(e) => setCopyright(e.target.value)} />
        <input type="number" placeholder="Author ID" value={authorId} onChange={(e) => setAuthorId(e.target.value)} />
        <button type="submit">Update Book</button>
      </form>
      <ul>
        <li><Link to="/">Return to Main Page</Link></li>
      </ul>
    </div>
  );
}

export default EditBook;
