import React, { Component } from "react";
import CategoryTable from "../../components/CategoryTable/CategoryTable";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCategories: JSON.parse(localStorage.getItem("categories"))
    };
    this.sortBy = this.sortBy.bind(this);
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
          <CategoryTable
            dataCategories={this.state.dataCategories}
            sortBy={this.sortBy}
          ></CategoryTable>
        </div>
    );
  }
}
