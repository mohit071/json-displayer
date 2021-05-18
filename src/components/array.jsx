import React, { Component } from "react";
import JsonDisplayer from "./jsonDisplayer";

class ArrayComponent extends Component {
  state = {};
  render() {
    const length = this.props.data.length;
    if (this.props.data.length > 0) {
      return (
        <>
          <div className="common">
            <span className="text-success font-weight-bold pl-3">
              {" "}
              {this.props.id}
            </span>{" "}
            : <span className="font-weight-bold">[</span>
            {this.props.data.map((elem, index) =>
              typeof elem === "boolean" ||
              typeof elem === "number" ||
              typeof elem === "string" ? (
                <span key={index}>{JSON.stringify(elem)}</span>
              ) : (
                <JsonDisplayer key={index} data={elem} />
              )
            )}
            <span className="font-weight-bold">]</span>
          </div>
        </>
      );
    }
  }
}

export default ArrayComponent;
