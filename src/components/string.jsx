import React, { Component } from "react";

class StringComponent extends Component {
  state = {};
  render() {
    return (
      <div className="common pl-3">
        <span className="text-success font-weight-bold">{this.props.id}</span> :{" "}
        <span className="text-info font-weight-bold">{this.props.data}</span>
      </div>
    );
  }
}

export default StringComponent;
