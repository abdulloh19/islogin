import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    addCount: 1,
  };

  countAdd = () => {
    const counter = this.state.count;
    this.setState({
      count: counter + this.state.addCount,
    });
  };

  addCounter = () => {
    const a = this.state.addCount;
    this.setState({
      addCount: a + 1,
    });
  };

  restart = () => {
    this.setState({
      count: 0,
    });
  };
  onRestart = () => {
    this.setState({
      addCount: 0,
    });
  };

  render() {
    return (
      <div className="container text-center">
        <div>
          <h5 className="mb-2">Metr: {this.state.count}</h5>
          <button className="btn btn-outline-danger" onClick={this.countAdd}>
            yurish
          </button>
          <button className="btn btn-outline-dark mx-4" onClick={this.restart}>
            Restart
          </button>
        </div>

        <div className="mt-5">
          <h5>qadam kattaligi: {this.state.addCount}</h5>
          <button className="btn btn-outline-danger" onClick={this.addCounter}>
            Qadamni kengaytirish
          </button>
          <button
            className="btn btn-outline-dark mx-4"
            onClick={this.onRestart}
          >
            Restart
          </button>
        </div>
      </div>
    );
  }

  //------------------------------------------------------------------------------------------------

  //   state = {
  //     count: 0,
  //   };

  //   counter = () => {
  //     const a = this.state.count;
  //     this.setState({
  //       count: a + 1,
  //     });
  //   };

  //   decrement = () => {
  //     const b = this.state.count;
  //     this.setState({
  //       count: b - 1,
  //     });
  //   };

  //   restart = () => {
  //     this.setState({
  //       count: 0,
  //     });
  //   };

  //   render() {
  //     return (
  //       <div className="container text-center">
  //         <h2 className="">Count: {this.state.count}</h2>
  //         <button className="btn btn-primary" onClick={this.counter}>
  //           +
  //         </button>
  //         <button className="btn btn-outline-danger" onClick={this.decrement}>
  //           -
  //         </button>
  //         <button className="btn btn-outline-dark" onClick={this.restart}>
  //           Restart
  //         </button>
  //       </div>
  //     );
  //   }
}

export default Counter;
