import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    active: true,
  };

  changeActive = () => {
    this.setState = {
      active: !this.state.active,
    };
  };

  render() {
    return (
      <div className="container mt-4">
        {this.state.active ? (
          <div>
            <h3>Welcome</h3>
            <button
              className="btn btn-outline-dark"
              onClick={this.changeActive}
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h3>Login</h3>
            <button
              className="btn btn-outline-danger"
              onClick={this.changeActive}
            >
              Login
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
