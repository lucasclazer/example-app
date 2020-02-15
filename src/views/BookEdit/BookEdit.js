import React, { Component } from "react";
import FormTest from "../../components/FormBook/FormTest.jsx";

export class BookEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <FormTest></FormTest>
      </div>
    );
  }
}

export default BookEdit;
