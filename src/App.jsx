import React from 'react';
import BookCard from './components/BookCard';
import './App.css';

function App() {
  const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      year: 1960,
      description: "A gripping tale of racial injustice and childhood innocence in the American South. It explores themes of empathy, morality, and the loss of innocence through the eyes of young Scout Finch."
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      year: 1949,
      description: "A dystopian novel set in a totalitarian society where surveillance is omnipresent. It delves into themes of government control, truth, and individual freedom."
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Fiction",
      year: 1925,
      description: "A story of the Jazz Age in America, focusing on the mysterious millionaire Jay Gatsby and his obsession with Daisy Buchanan. It critiques the American Dream and excess."
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      year: 1813,
      description: "A romantic novel that examines the manners and matrimonial machinations of the British gentry. It follows Elizabeth Bennet as she navigates issues of class, marriage, and personal growth."
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      year: 1951,
      description: "A coming-of-age story narrated by Holden Caulfield, a disillusioned teenager. It explores themes of alienation, identity, and the transition to adulthood."
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      genre: "Non-Fiction",
      year: 2011,
      description: "An exploration of the history of humanity from the Stone Age to the modern age. It examines how Homo sapiens came to dominate the planet and the major revolutions that shaped our world."
    }
  ];

  const totalBooks = books.length;

  // Calculate most common genre
  const genreCount = {};
  books.forEach(book => {
    genreCount[book.genre] = (genreCount[book.genre] || 0) + 1;
  });
  const mostCommonGenre = Object.keys(genreCount).reduce((a, b) => genreCount[a] > genreCount[b] ? a : b);

  return (
    <div className="app">
      <header className="header">
        <h1>My Book Collection</h1>
        <p>Books That Changed My Perspective</p>
      </header>
      <section className="books-list">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            genre={book.genre}
            year={book.year}
            description={book.description}
          />
        ))}
      </section>
      <section className="summary">
        <h2>Books Summary</h2>
        <p>Total Books: {totalBooks}</p>
        <p>Most Common Genre: {mostCommonGenre}</p>
      </section>
      <footer className="footer">
        <p>© 2025 Book Lover</p>
        <p>Contact: booklover@example.com</p>
      </footer>
    </div>
  );
}

export default App;
