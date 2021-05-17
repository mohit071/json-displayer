import React, { Component } from "react";

class StringComponent extends Component {
  state = {};
  render() {
    return (
      <div className="common">
        {this.props.id} : {this.props.data},
      </div>
    );
  }
}

export default StringComponent;
