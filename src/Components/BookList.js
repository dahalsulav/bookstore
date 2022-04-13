import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => {
  console.log(props);
  const deleteBookHandler = (id) => {
    props.getBookId(id);
  };
  const renderBookList = props.books.map((book) => {
    return (
      <BookCard book={book} clickHandler={deleteBookHandler} key={book.id} />
    );
  });
  return <div className="ui celled list">{renderBookList}</div>;
};

export default BookList;
