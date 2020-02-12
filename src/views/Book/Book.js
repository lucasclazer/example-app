import React, { Component } from "react";
import MainTable from "../../components/Table/MainTable";

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

  sortBy(key, array, direction) {
    console.log("Sorted by!", key);
    this.setState({
      dataBooks: array.sort((a, b) => a[key] < b[key])
    });
    console.log("Sort result: ", this.dataBooks);
  }
  render() {
    return (
      <div className="animated fadeIn">
        <div className="d-flex mb-3">
          <button className="btn btn-primary shadow" onClick={this.goBack}>
            Adicionar
          </button>
          <button className="btn btn-danger ml-auto shadow">Voltar</button>
        </div>
        <MainTable
          dataCategories={this.state.dataCategories}
          dataBooks={this.filterDataBooks()}
          sortBy={this.sortBy}
        ></MainTable>
      </div>
    );
  }
}
