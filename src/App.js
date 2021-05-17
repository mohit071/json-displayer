import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import JsonDisplayer from "./components/jsonDisplayer";

class App extends Component {
  state = {
    data: "",
    error: null,
    parsedData: {},
    validateClicked: false,
  };

  handleChange = (e) => {
    let data = e.currentTarget.value;
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let validateClicked = true;
    try {
      let parsedData = JSON.parse(this.state.data);

      this.setState({ validateClicked, parsedData, error: null });
    } catch (error) {
      this.setState({ error, validateClicked });
    }
  };
  render() {
    return (
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter Your Json here : </Form.Label>
            <Form.Control
              as="textarea"
              onChange={this.handleChange}
              value={this.state.data}
              rows={20}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Validate
          </Button>
        </Form>
        {!this.state.error && this.state.validateClicked && (
          <JsonDisplayer data={this.state.parsedData} />
        )}
        {this.state.error && this.state.validateClicked && (
          <div
            className="alert pt-3 alert-danger"
            style={{ marginTop: "20px" }}
          >
            Invalid Json. Enter valid json and try again
          </div>
        )}
      </div>
    );
  }
}

export default App;
