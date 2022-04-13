import React from 'react';

class AddBook extends React.Component {
  state = {
    bookname: '',
    bookauthor: '',
    bookisbn: '',
    bookprice: 1,
  };
  add = (e) => {
    e.preventDefault();
    if (
      this.state.bookname === '' ||
      this.state.bookauthor === '' ||
      this.state.bookisbn === ''
    ) {
      alert('All fields are mandatory');
      return;
    }
    this.props.addBookHandler(this.state);
    this.setState({
      bookname: '',
      bookauthor: '',
      bookisbn: '',
      bookprice: 1,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Book</h2>
        <form action="" onSubmit={this.add}>
          <div className="ui form">
            <div className="field">
              <label htmlFor="bookname">Book Name</label>
              <input
                type="text"
                name="bookname"
                placeholder="Enter Book Name"
                value={this.state.bookname}
                onChange={(e) => {
                  this.setState({ bookname: e.target.value });
                }}
              />
            </div>
            <div className="field">
              <label htmlFor="bookauthor">Book Author</label>
              <input
                type="text"
                name="bookauthor"
                placeholder="Enter Book Author"
                value={this.state.bookauthor}
                onChange={(e) => {
                  this.setState({ bookauthor: e.target.value });
                }}
              />
            </div>
            <div className="field">
              <label htmlFor="bookisbn">Book ISBN No:</label>
              <input
                type="number"
                name="bookisbn"
                placeholder="Enter Book Number"
                value={this.state.bookisbn}
                onChange={(e) => {
                  this.setState({ bookisbn: e.target.value });
                }}
              />
            </div>
            <div className="field">
              <label htmlFor="bookprice">Book Price:</label>
              <input
                type="number"
                min="1"
                step="any"
                name="bookprice"
                placeholder="Enter Book Price"
                value={this.state.bookprice}
                onChange={(e) => {
                  this.setState({ bookprice: e.target.value });
                }}
              />
            </div>
            <button className="ui button blue">Add Book</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddBook;
