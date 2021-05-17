import React, { Component } from "react";

class NumberComponent extends Component {
  state = {};
  render() {
    return (
      <div className="common">
        {this.props.id} : {this.props.data},
      </div>
    );
  }
}

export default NumberComponent;
