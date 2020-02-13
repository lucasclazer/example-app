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
    this.goBack = this.goBack.bind(this);

    this.filterDataBooks = this.filterDataBooks.bind(this);
    this.sortBy = this.sortBy.bind(this);
  }

  componentWillMount() {
    console.log("DataBooks: ", this.state.dataBooks);
    console.log("Books Props:", this.props);
    console.log("Route Params:" + this.props.match.params.id);
  }

  goBack() {}

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
          {/* <button className="btn btn-danger ml-auto shadow">Voltar</button> */}
        </div>
        <MainTable
          dataCategories={this.state.dataCategories}
          dataBooks={this.filterDataBooks()}
          sortBy={this.sortBy}
        ></MainTable>
        <Route path="/bookmanager/:id" component={FormBook}></Route>
      </div>
    );
  }
}
