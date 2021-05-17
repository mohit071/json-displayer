import React, { Component } from "react";
import JsonDisplayer from "./jsonDisplayer";

class ArrayComponent extends Component {
  state = {};
  render() {
    const length = this.props.data.length;
    if (this.props.data.length > 0) {
      return (
        <>
          <div className="common" style={{ fontSize: "15px", fontWeight: 400 }}>
            {this.props.id} : [
            {this.props.data.map((elem, index) =>
              typeof elem === "boolean" ||
              typeof elem === "number" ||
              typeof elem === "string" ? (
                <span key={index} style={{ fontSize: "15px", fontWeight: 400 }}>
                  {JSON.stringify(elem)},
                </span>
              ) : (
                <JsonDisplayer key={index} data={elem} />
              )
            )}
            ]
          </div>
        </>
      );
    }
  }
}

export default ArrayComponent;
