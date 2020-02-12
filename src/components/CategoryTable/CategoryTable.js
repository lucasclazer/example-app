import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import Book from "../../views/Book/Book";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: {},
      bookRouteId: 0
    };
  }

  getCategories() {
    return JSON.parse(localStorage.getItem("categories"));
  }

  getBooks() {
    return JSON.parse(localStorage.getItem("books"));
  }

  setBookRoute(id) {
    this.setState({
    bookRouteId: id
    })

  }
  render(props) {
    console.log("Data Categories: ", this.props.dataCategories);
    console.log("Data books: ", this.props.dataBooks);

    return (
      <div className="animated fadeIn">
        <table className="table table-light">
          <thead>
            <tr>
              <th>
                {" "}
                <button
                  className="btn btn-outline"
                  onClick={() =>
                    this.props.sortBy("id", this.props.dataCategories)
                  }
                >
                  Id
                </button>
              </th>
              <th>
                {" "}
                <button
                  className="btn btn-outline"
                  onClick={() =>
                    this.props.sortBy("name", this.props.dataCategories)
                  }
                >
                  Category Name
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.dataCategories.map(row => (
              <tr key="id">
                <td>{row.id}</td>
                <td>
                  <Link
                    to={`/books/${row.id}`}
                    onClick={() => this.setBookRoute(row.id)}
                  >
                    {row.name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Route path="/books/:id" component={Book}></Route>
      </div>
    );
  }
}
