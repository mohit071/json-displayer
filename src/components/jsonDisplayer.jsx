import React, { Component } from "react";
import _ from "lodash";
import ArrayComponent from "./array";
import NumberComponent from "./number";
import BooleanComponent from "./boolean";
import StringComponent from "./string";

class JsonDisplayer extends Component {
  state = {};

  renderComplexElement(key, data, type) {
    type = Array.isArray(data) ? "array" : "object";
    switch (type) {
      case "array":
        return <ArrayComponent key={key} id={key} data={data} />;

      case "object":
        return (
          <div style={{ fontSize: "15px", fontWeight: "400" }}>
            {key} : <JsonDisplayer key={key} id={key} data={data} />
          </div>
        );

      default:
        return;
    }
  }

  renderBasicElement(key, data, type) {
    switch (type) {
      case "string":
        return <StringComponent key={key} id={key} data={data} />;
      case "boolean":
        return <BooleanComponent key={key} id={key} data={data} />;
      case "number":
        return <NumberComponent key={key} id={key} data={data} />;

      default:
        return <StringComponent key={key} id={key} data={data} />;
        break;
    }
  }

  render() {
    const data = { ...this.props.data };
    const dataKeys = Object.keys(data);

    return (
      <React.Fragment>
        {"{"}
        {dataKeys.map((key) =>
          typeof data[key] === "string" ||
          typeof data[key] === "boolean" ||
          typeof data[key] === "number"
            ? this.renderBasicElement(key, data[key], typeof data[key])
            : this.renderComplexElement(key, data[key], typeof data[key])
        )}
        {"}"},
      </React.Fragment>
    );
  }
}

export default JsonDisplayer;