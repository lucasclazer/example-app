import React, { Component } from "react";

export default class FormBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: JSON.parse(localStorage.getItem("books")),
      categories: JSON.parse(localStorage.getItem("categories")),
      bookId: -1,
      category: 0,
      id: -100,
      title: "",
      author: "",
      book: {},
      action: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.forceUpdate();
    if (this.props.match.params.id >= 0) {
      console.log("Inicializa edição!");

      var bookTemp = this.state.books.find(
        x => x.id == this.props.match.params.id
      );
      console.log("Livro para edição encontrado!, ", bookTemp);
      this.setState({
        action: true,
        id: bookTemp.id,
        title: bookTemp.title,
        author: bookTemp.author,
        category: bookTemp.category.id
      });
    }
  }

  AddBook() {
    let date = Date.now();
    let temp = this.state.books.sort((a, c) => a["id"] < c["id"]);
    let tempId = temp[0].id + 1;

    var book = {
      id: tempId,
      createdDate: date,
      createdDateUTC: date.toLocaleString(),
      title: this.state.title,
      author: this.state.author,
      category: this.state.categories[this.state.category],
      deleted: false
    };

    console.log("Objecto para gravar: ", book);
    this.state.books.push(book);
    console.log("State: ", this.state);
    localStorage.setItem("books", JSON.stringify(this.state.books));
  }

  EditBook() {
    console.log("Id par editar: ", this.state.id);
    console.log(
      "Livro para editar: ",
      this.state.books.find(x => x.id == this.state.id)
    );

    var tempBooks = this.state.books;
    var index = tempBooks.findIndex(x => x.id == this.state.id);
    console.log("IndexOf, ", index);

    tempBooks[index].title = this.state.title;
    tempBooks[index].author = this.state.author;
    tempBooks[index].category = this.state.category;

    this.setState({ books: tempBooks });
    console.log("Vetor de livros Alterado!, ", this.state.books);
    localStorage.setItem("books", JSON.stringify(this.state.books));
  }

  SaveBook() {

    console.log("Id Route: ", this.props.match.params.id);
    console.log("Livros: ", this.state.books);

    if (this.props.match.params.id <= -1) {
      this.AddBook();
    } else {
      this.EditBook();
    }

  }

  Buttons(props) {
    if (this.state.action) {
      return (
        <div className="d-flex">
          <button className="btn btn-primary" type="submit">
            Edit
          </button>
          <button className="btn btn-danger ml-auto" type="reset">
            Cancel
          </button>
        </div>
      );
    }

    return (
      <div className="d-flex">
        <button className="btn btn-primary" type="submit">
          Add
        </button>
        <button className="btn btn-danger ml-auto" type="reset">
          Cancel
        </button>
      </div>
    );
  }

  Header(props) {
    if (this.state.action) {
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
    console.log("[e.target.name]: ", [e.target.name]);
    this.setState({ [e.target.name]: e.target.value });
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
                  name="title"
                  className="form-control"
                  type="text"
                  required
                  value={this.state.title}
                  onChange={event => this.handleChange(event)}
                />
                <label>Author</label>
                <input
                  name="author"
                  className="form-control"
                  type="text"
                  required
                  onChange={event => this.handleChange(event)}
                  value={this.state.author}
                />
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  className="custom-select"
                  onChange={event => this.handleChange(event)}
                  // defaultValue={this.state.category}
                  value={this.state.category}
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
