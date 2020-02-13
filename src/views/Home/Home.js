import React, { Component } from "react";
import MainTable from "../../components/Table/MainTable";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataCategories: JSON.parse(localStorage.getItem("categories")),
      dataBooks: JSON.parse(localStorage.getItem("books")),
      direction: true
    };
    this.sortBy = this.sortBy.bind(this);
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
        <MainTable
          dataCategories={this.state.dataCategories}
          dataBooks={this.state.dataBooks}
          sortBy={this.sortBy}
        />
      </div>
    );
  }
}
