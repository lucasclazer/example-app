import React, { Component } from "react";

export default class FormBook extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Register New Book</h5>
            <p className="card-text">Register you books here!</p>
            <div className="card-body">
              <form method="get" action="">
                <label>Title</label>
                <input className="form-control" type="text" />
                <label>Author</label>
                <input className="form-control" type="text" />
                <input className="form-control" type="text" />
                <div className="form-group">
                  <label htmlFor="my-select">Category</label>
                  <select id="my-select" className="custom-select">
                    <option value="0">Without Category</option>
                    <option value="1">reading - Currently Reading</option>
                    <option value="2">wantToRead - Want to Ready</option>
                    <option value="3">read - Read</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <div className="card-footer">
            <div className="btn-group" role="group" aria-label="Button group">
              <button className="btn btn-primary">Adicionar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
