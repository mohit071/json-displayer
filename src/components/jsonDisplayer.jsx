import React, { Component } from "react";
import NumberComponent from "./number";
import BooleanComponent from "./boolean";
import StringComponent from "./string";
import ToggleComponent from "./toggleComponent";

class JsonDisplayer extends Component {
  state = {};

  renderComplexElement(key, data, type) {
    switch (type) {
      case "object":
        return (
          <div>
            <ToggleComponent key={key} id={key} data={data} />
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
    }
  }

  render() {
    const data = { ...this.props.data };
    const dataKeys = Object.keys(data);

    return (
      <React.Fragment>
        <div className="pl-3">
          {dataKeys.map((key) =>
            typeof data[key] === "string" ||
            typeof data[key] === "boolean" ||
            typeof data[key] === "number"
              ? this.renderBasicElement(key, data[key], typeof data[key])
              : this.renderComplexElement(key, data[key], typeof data[key])
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default JsonDisplayer;
