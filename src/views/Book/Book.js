import React, { Component } from "react";
import MainTable from "../../components/Table/MainTable";
import { Link, Route } from "react-router-dom";
import FormBook from "../../components/FormBook/FormBook";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: -1,
      dataCategories: JSON.parse(localStorage.getItem("categories")),
      dataBooks: JSON.parse(localStorage.getItem("books"))
    };
    this.filterDataBooks = this.filterDataBooks.bind(this);
    this.sortBy = this.sortBy.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  componentWillMount() {
    console.log("DataBooks: ", this.state.dataBooks);
    console.log("Books Props:", this.props);
    console.log("Route Params:" + this.props.match.params.id);
  }

  filterDataBooks() {
    if (this.props.match.params.id == -1) {
      return this.state.dataBooks;
    }

    let result = this.state.dataBooks.filter(
      x => x.category.id == this.props.match.params.id
    );

    console.log("Filtrou: ", result);
    return result;
  }

  setBooks(array) {
    localStorage.setItem("books", JSON.stringify(array));
  }

  deleteBook(id) {
    console.log("Delete id: ", id);
    console.log("Array antes da deleção: ", this.state.dataBooks);
    let res = this.state.dataBooks.filter(x => x.id != id); // por enquanto excluí o registro,
    console.log("retorna array sem o livro:", res);
    this.setState({ dataBooks: res });
    this.setBooks(res);
  }

  sortBy(key, array) {
    console.log("Sorted by!", key);
    let dataBooksTemp;
    console.log("Direction: ", this.state.direction);
    if (this.state.direction) {
      dataBooksTemp = array.sort((a, b) => a[key] < b[key]);
    } else {
      dataBooksTemp = array.sort((a, b) => a[key] > b[key]);
    }

    this.setState({ direction: !this.state.direction });
    this.setState({
      dataBooks: dataBooksTemp
    });
    console.log("Sort result: ", this.dataBooks);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="d-flex mb-3">
          <Link className="btn btn-primary shadow" to={`/bookmanager/${-1}`}>
            Adicionar
          </Link>
        </div>
        <MainTable
          dataCategories={this.state.dataCategories}
          dataBooks={this.filterDataBooks()}
          sortBy={this.sortBy}
          deleteBook={this.deleteBook}
        ></MainTable>
        <Route path="/bookmanager/:id" component={FormBook}></Route>
      </div>
    );
  }
}
