import React from 'react';
import { Link } from 'react-router-dom';

/**
 * MainPage component that displays the main page of the application
 */
function MainPage() {
    return (
        <div>
            <h1>Java Final Project</h1>
            <nav>
                <ul>
                    <li><Link to="/books">See all Books</Link></li>
                    <li><Link to="/authors">See all Authors</Link></li>
                    <li><Link to="/add-book">Add Book</Link></li>
                    <li><Link to="/add-author">Add Author</Link></li>
                    <li><Link to="/edit-author">Edit Author</Link></li>
                    <li><Link to="/get-author">Get Author by ID</Link></li>
                    <li><Link to="/get-book">Get Book by ISBN</Link></li>
                    <li><Link to="/delete-author">Delete Author</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default MainPage;