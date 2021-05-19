import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import JsonDisplayer from "./components/jsonDisplayer";
import AceEditor from "react-ace";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";

class App extends Component {
  state = {
    data: "",
    error: null,
    parsedData: {},
    validateClicked: false,
    theme: "github",
  };

  handleChange = (e) => {
    let data = e.currentTarget.value;
    this.setState({ data });
  };

  handleSelect = (e) => {
    let theme = e.target.value;
    console.log(theme);
    this.setState({ theme });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    let validateClicked = true;
    try {
      let parsedData = JSON.parse(this.state.data);

      this.setState({ validateClicked, parsedData, error: null });
    } catch (error) {
      this.setState({ error, validateClicked });
    }
  };

  handleEditorChange = (value) => {
    this.setState({ data: value });
  };
  render() {
    var strOb = `
      {"type": "DeviceConfiguration","general": {"hostname": "RouterA"},"interfaces": [{"name": "lo0","type": "ethernet","addresses": [{"address": "127.0.0.1","mask": 8,"proto": "static","family": "ipv4"}]},{"name": "eth0","type": "ethernet","addresses": [{"address": "192.168.1.1","mask": 24,"proto": "static","family": "ipv4"}]}]}
      `;

    return (
      <React.Fragment>
        <h3 className="text-center pt-3 ">
          <span className=" border-thick"> JSON TREE </span>
        </h3>
        <div className="row p-5">
          <div className="col p-3 custom-border">
            <Form.Label>select theme : </Form.Label>
            <Form.Control
              className="w-25"
              as="select"
              onChange={this.handleSelect}
            >
              <option value="github">Light</option>
              <option value="monokai">Dark</option>
            </Form.Control>
            <CopyToClipboard
              text={this.state.data}
              className="mt-3 mb-3 float-right"
              onCopy={() => {
                this.setState({ copied: true });
              }}
              id="copy-to-clipboard"
            >
              <Button variant="outline-info">copy json</Button>
            </CopyToClipboard>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label className="mt-5">
                  Enter Your Json here :{" "}
                </Form.Label>
                <AceEditor
                  mode="json"
                  theme={this.state.theme}
                  onChange={this.handleEditorChange}
                  name="json-data"
                  value={JSON.stringify(this.state.value, null, 2)}
                  className={
                    this.state.theme === "github" ? "w-100 light" : "w-100 dark"
                  }
                  setOptions={{
                    showLineNumbers: true,
                  }}
                  editorProps={{
                    $blockScrolling: false,
                  }}
                  onLoad={(editor) => {
                    editor.focus();
                    editor.getSession().setUseWrapMode(true);
                    editor.setShowPrintMargin(false);
                  }}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Validate
              </Button>
            </Form>
          </div>
          <div className="col ">
            {!this.state.error && this.state.validateClicked && (
              <React.Fragment>
                <div className="pl-5 custom-border json-displayer-wrapper">
                  <div className=" font-weight-bold mt-3">{"{"}</div>
                  <div className="container ">
                    <JsonDisplayer data={this.state.parsedData} />
                  </div>
                  <div className=" font-weight-bold mb-3">{"}"}</div>
                </div>
              </React.Fragment>
            )}
            {this.state.error && this.state.validateClicked && (
              <div className="alert pt-3 alert-danger mt-3">
                Invalid Json. Enter valid json and try again
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
