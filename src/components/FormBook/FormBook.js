import React, { Component } from "react";

export default class FormBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookId: -1,
      category: 0,
      id: -100,
      title: "",
      author: "a",
      deleted: false,
      book: {}
      // books: JSON.parse(localStorage.getItem("books")),
      // categories: JSON.parse(localStorage.getItem("categories")),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.SaveBook = this.SaveBook.bind(this);
    // this.state.books = this.state.books.bind(this);
  }

  getBook() {
    this.state.books.filter(x => x.id == this.bookId);
  }

  SaveBook() {
    if (this.props.action) {
      return;
    }
    console.log("state: ", this.state);

    let temp = this.state.books.sort((a, b) => a["id"] < b["id"]);
    let lastId = temp[0].id + 1;
    let date = Date.now();

    this.setState({
      book: {
        id: lastId,
        createdDate: date,
        createdDateUTC: date.toLocaleString(),
        title: this.state.title,
        author: this.state.author,
        category: this.state.categories[this.state.category],
        deleted: false
      }
    });

    console.log("Livro para inserir: ", this.state.book);

    this.state.books.push(this.state.book);

    localStorage.setItem("books", JSON.stringify(this.state.books));
  }

  Buttons(props) {
    if (this.props.action) {
      return (
        <div>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => this.SaveBook()}
          >
            Edit
          </button>
          <button className="btn btn-primary" type="submit">
            Edit
          </button>
        </div>
      );
    }

    return (
      <div className="d-flex">
        <button
          className="btn btn-primary"
          type="submit"
          // onClick={() => }
        >
          Add
        </button>
        <button className="btn btn-danger ml-auto" type="reset">
          Cancel
        </button>
      </div>
    );
  }

  Header(props) {
    if (this.props.action) {
      return (
        <div>
          <h5 className="card-title">Edit your Book</h5>
          <p className="card-text">Change your books here!</p>
        </div>
      );
    }
    return (
      <div>
        <h5 className="card-title">Register your Book</h5>
        <p className="card-text">Register your books here!</p>
      </div>
    );
  }

  handleChange(e) {
    // console.log("Evento", e);
    const value = e.target.value;
    console.log("value", e.target);
    this.setState({ [e.target.name]: e.target.value });

    // console.log("State Event: ", this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.SaveBook();
  }

  render() {
    return (
      <div>
        <div className="card">
          <form onSubmit={this.handleSubmit}>
            <div className="card-body">
              {this.Header()}
              <div className="form-group">
                <label>Title</label>
                <input
                  className="form-control"
                  type="text"
                  required
                  // value={this.state.title}
                  // onChange={this.handleChange.bind(this)}
                />
                <label>Author</label>
                <input
                  className="form-control"
                  type="text"
                  required
                  onChange={() => this.handleChange}
                  value={this.state.author}
                />
                <label htmlFor="my-select">Category</label>
                <select
                  id="my-select"
                  className="custom-select"
                  // onChange={this.handleChange}
                  // // defaultValue={this.state.category}
                  // value={this.state.category}
                >
                  <option value="0">Without Category</option>
                  <option value="1">reading - Currently Reading</option>
                  <option value="2">wantToRead - Want to Ready</option>
                  <option value="3">read - Read</option>
                </select>
              </div>
            </div>
            <div className="card-footer">{this.Buttons()}</div>
          </form>
        </div>
      </div>
    );
  }
}
