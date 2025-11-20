import React from 'react';
import './BookCard.css';

const BookCard = ({ title, author, genre, year, description }) => {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  );
};

export default BookCard;
