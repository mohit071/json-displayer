import React, { Component } from "react";

class BooleanComponent extends Component {
  state = {};

  render() {
    return (
      <div className="common">
        {this.props.id} : {JSON.stringify(this.props.data)},
      </div>
    );
  }
}

export default BooleanComponent;
