import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }

  changeActive = () => {
    this.setState({ active: false });
  };
  changeActiveFalse = () => {
    this.setState({ active: true });
  };

  render() {
    const { active } = this.state;
    return (
      <div className="container mt-4">
        {active ? (
          <div>
            <h3>Welcome</h3>
            <button
              className="btn btn-outline-danger"
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
              onClick={this.changeActiveFalse}
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
