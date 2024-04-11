// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import BookList from './components/BookList';
import AuthorList from './components/AuthorList';
import AddBook from './components/AddBook';
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/EditAuthor';
import GetAuthorByID from './components/GetAuthorByID';
import GetBookByISBN from './components/GetBookByISBN';
import DeleteAuthor from './components/DeleteAuthor';

/**
 * App component that defines the routes for the application
 */
function App() {
  return (
    <div style={{ backgroundColor: "#D3FDFF", padding: 100 }}>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/authors" element={<AuthorList />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/add-author" element={<AddAuthor />} />
        <Route path="/edit-author" element={<EditAuthor />} />
        <Route path="/get-author" element={<GetAuthorByID />} />
        <Route path="/get-book" element={<GetBookByISBN />} />
        <Route path="/delete-author" element={<DeleteAuthor />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
