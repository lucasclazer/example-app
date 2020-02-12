import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: true,
      book: {}
    };
  }

  getCategories() {
    return JSON.parse(localStorage.getItem("categories"));
  }

  getBooks() {
    return JSON.parse(localStorage.getItem("books"));
  }

  setBooks(array) {
    localStorage.setItem("books", JSON.stringify(array));
  }

  onEdit(id) {
    console.log("Edit id: ", id);
    let tempBooks = this.getBooks();
    console.log("pegou os livros do storage: ", tempBooks);
    let res = tempBooks.filter(x => x.id == id);
    console.log("Busca livro por id:", res);
    this.setState({ book: res });

    console.log("Book setado: ", this.state.book);
  }

  onSave() {}

  onDelete(id) {
    console.log("Edit id: ", id);
    let tempBooks = this.getBooks();
    console.log("pegou os livros do storage: ", tempBooks);
    let res = tempBooks.filter(x => x.id != id);

    console.log("retorna array sem o livro:", res);

    this.setBooks(res);

    console.log("Book setado: ", this.state.book);
  }

  render(props) {
    console.log("Data Categories: ", this.props.dataCategories);
    console.log("Data books: ", this.props.dataBooks);

    return (
      <div className="animated fadeIn shadow">
        <table className="table table-light">
          <thead>
            <tr>
              <th>
                {" "}
                <button
                  className="btn btn-outline"
                  onClick={() => this.props.sortBy("id", this.props.dataBooks)}
                >
                  Id
                </button>
              </th>
              <th>
                {" "}
                <button
                  className="btn btn-outline"
                  onClick={() =>
                    this.props.sortBy(
                      "title",
                      this.props.dataBooks,
                      this.state.direction
                    )
                  }
                >
                  Title
                  <i className="fa fa-sort ml-2"></i>
                </button>
              </th>
              <th>
                {" "}
                <button className="btn btn-outline">Author </button>
              </th>
              <th>
                {" "}
                <button className="btn btn-outline">Category</button>
              </th>
              <th>
                {" "}
                <button
                  className="btn btn-outline"
                  onClick={() =>
                    this.props.sortBy("createdDate", this.props.dataBooks)
                  }
                >
                  CreatedDate
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.dataBooks.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.author}</td>
                <td>{row.category.name}</td>
                <td>{row.createdDateUTC}</td>
                <td>
                  <button
                    className="btn btn-warning mr-2"
                    onClick={() => this.onEdit(row.id)}
                  >
                    <i className="fa fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.onDelete(row.id)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
