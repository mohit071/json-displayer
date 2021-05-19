import React, { Component } from "react";
import JsonDisplayer from "./jsonDisplayer";

class ToggleComponent extends Component {
  state = {
    open: true,
  };

  onToggleOpen = () => {
    this.setState({
      open: true,
    });
  };

  onToggleClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    const { id, data } = this.props;

    return (
      <React.Fragment>
        {this.state.open && (
          <>
            <span
              className="text-success font-weight-bold pl-3"
              onClick={this.onToggleClose}
            >
              {id}{" "}
              <span>
                <i className="fa fa-caret-down"></i>
              </span>
            </span>

            <JsonDisplayer id={id} data={data} />
          </>
        )}

        {!this.state.open && (
          <span
            className="text-success font-weight-bold pl-3"
            onClick={this.onToggleOpen}
          >
            {id}{" "}
            <span>
              <i className="fa fa-caret-right"></i>
            </span>
          </span>
        )}
      </React.Fragment>
    );
  }
}

export default ToggleComponent;
