import React, { Component } from "react";

export default class FormTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teste: this.props.teste
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(e) {
    console.log("Evento: ", e);
    console.log("Evento value: ", e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label>Digite o seu email</label>
          <input
            id="email"
            type="email"
            className="form-control"
            aria-describedby="emailHelpId"
            placeholder="Email"
            value={this.props.teste}
            onChange={this.handleChangeInput}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    );
  }
}
