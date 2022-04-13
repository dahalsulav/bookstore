import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import AddBook from './AddBook';
import BookList from './BookList';

function App() {
  const LOCAL_STORAGE_KEY = 'books';
  const [books, setBooks] = useState([]);
  const addBookHandler = (book) => {
    console.log(book);
    setBooks([...books, { id: uuid(), ...book }]);
  };

  const removeBookHandler = (id) => {
    const newBookList = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(newBookList);
  };

  useEffect(() => {
    const getBooks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getBooks) setBooks(getBooks);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  return (
    <div className="ui container">
      <Header />
      <AddBook addBookHandler={addBookHandler} />
      <BookList books={books} getBookId={removeBookHandler} />
    </div>
  );
}

export default App;
