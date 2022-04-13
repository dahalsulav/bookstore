import React from 'react';
const BookCard = (props) => {
  const { id, bookname, bookauthor, bookisbn, bookprice } = props.book;
  return (
    <div className="item">
      <div className="content" style={{ paddding: '10px' }}>
        <div className="header">
          <h1>Book: {bookname}</h1>
        </div>
        <div className="header">
          <i>By {bookauthor}</i>
        </div>
        <div className="header">ISBN: {bookisbn}</div>
        <div className="header">
          Price: <strong style={{ color: 'purple' }}>{bookprice}</strong>
        </div>
      </div>
      <div style={{ marginLeft: '90%' }}>
        <i
          className="trash alternate outline icon"
          style={{
            color: 'red',
            marginTop: '8px',
            fontSize: '25px',
          }}
          onClick={() => props.clickHandler(id)}
        ></i>
      </div>
      <hr />
    </div>
  );
};
export default BookCard;
