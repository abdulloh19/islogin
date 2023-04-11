import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
    };
  }

  handleClick = (event) => {
    const value = event.target.value;
    switch (value) {
      case "=": {
        try {
          const result = eval(this.state.result);
          this.setState({ result });
        } catch (error) {
          this.setState({ result: "error" });
        }
        break;
      }
      case "C": {
        this.setState({ result: "" });
        break;
      }
      default: {
        this.setState({ result: this.state.result + value });
        break;
      }
    }
  };

  render() {
    return (
      <div className="calculator-keys card">
        <div className="display">{this.state.result}</div>
        <button
          className="operator btn btn-info"
          value="7"
          onClick={this.handleClick}
        >
          7
        </button>
        <button
          className="operator btn btn-info"
          value="8"
          onClick={this.handleClick}
        >
          8
        </button>
        <button
          className="operator btn btn-info"
          value="9"
          onClick={this.handleClick}
        >
          9
        </button>
        <button
          className="operator btn btn-info"
          value="/"
          onClick={this.handleClick}
        >
          /
        </button>
        <button
          className="operator btn btn-info"
          value="4"
          onClick={this.handleClick}
        >
          4
        </button>
        <button
          className="operator btn btn-info"
          value="5"
          onClick={this.handleClick}
        >
          5
        </button>
        <button
          className="operator btn btn-info"
          value="6"
          onClick={this.handleClick}
        >
          6
        </button>
        <button
          className="operator btn btn-info"
          value="*"
          onClick={this.handleClick}
        >
          *
        </button>
        <button
          className="operator btn btn-info"
          value="="
          onClick={this.handleClick}
        >
          =
        </button>
        <button
          className="operator btn btn-info"
          value="+"
          onClick={this.handleClick}
        >
          +
        </button>
        <button
          className="operator btn btn-info"
          value="-"
          onClick={this.handleClick}
        >
          -
        </button>
      </div>
    );
  }
}

export default App;
