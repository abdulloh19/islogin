import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";

class Timer extends React.Component {
  state = {
    hour: 0,
    minute: 0,
    second: 0,
    interval: "",
    disabled: false,
    savedIntervals: [],
  };

  onClickedStart = () => {
    const timer = setInterval(() => {
      const { hour, minute, second, interval } = this.state;
      if (second === 0) {
        if (minute === 0) {
          if (hour === 0) {
            this.setState({
              hour: 0,
              minute: 0,
              second: 0,
            });
          } else {
            this.setState({
              hour: hour - 1,
            });
          }
          this.setState({
            second: 0,
            minute: 59,
          });
        } else {
          this.setState({
            second: 59,
            minute: minute - 1,
          });
        }
      } else {
        this.setState({
          second: second - 1,
        });
      }
      if (hour === 0 && minute === 0 && second === 0) {
        clearInterval(interval);
        alert("Timout");
        this.setState({
          minute: 0,
          disabled: false,
        });
      }
    }, 10);

    this.setState({
      interval: timer,
      disabled: true,
    });
  };

  //clicked buttons-----------------------------------------------------------------------------------

  OnAddCount = () => {
    const c = this.state.hour;
    this.setState({
      hour: c + 1,
    });
  };

  onCount = () => {
    const counter = this.state.minute;
    this.setState({
      minute: counter + 1,
    });
  };

  onCounter = () => {
    const addCounterr = this.state.second;
    this.setState({
      second: addCounterr + 1,
    });
  };

  onTopClicked = () => {
    clearInterval(this.state.interval);
    this.setState({
      disabled: false,
    });
  };

  onRestartClicked = () => {
    this.onTopClicked(
      this.setState({
        minute: 0,
        hour: 0,
        second: 0,
        savedIntervals: [],
      })
    );
  };

  onIntervlaClicked = () => {
    const { hour, minute, second, savedIntervals } = this.state;
    savedIntervals.push(hour + ":" + minute + ":" + second);
    this.setState({
      savedIntervals,
    });
  };

  render() {
    const { hour, minute, second, disabled, savedIntervals } = this.state;
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 offset-3">
            <div className="card text-center">
              <div>
                <h1>Timer</h1>
              </div>
              <div className="d-flex text-center justify-content-center">
                <div>
                  <button
                    className="btn btn-outline-secondary mx-1"
                    onClick={this.OnAddCount}
                  >
                    +
                  </button>
                  <h3>{hour} :</h3>
                </div>
                <div>
                  <button
                    className="btn btn-outline-secondary mx-1"
                    onClick={this.onCount}
                  >
                    +
                  </button>
                  <h3>{minute}</h3>
                </div>
                <div>
                  <button
                    className="btn btn-outline-secondary mx-1"
                    onClick={this.onCounter}
                  >
                    +
                  </button>
                  <h3>: {second}</h3>
                </div>
              </div>
              <div className="card-footer">
                <div className="row">
                  <div className="col-md-3">
                    <button
                      className="btn btn-outline-primary"
                      onClick={this.onClickedStart}
                      disabled={disabled}
                    >
                      Start
                    </button>
                  </div>
                  <div className="col-md-3">
                    <button
                      className="btn btn-outline-warning"
                      onClick={this.onTopClicked}
                    >
                      Stop
                    </button>
                  </div>
                  <div className="col-md-3">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={this.onIntervlaClicked}
                    >
                      Interval
                    </button>
                  </div>
                  <div className="col-md-3">
                    <button
                      className="btn btn-outline-danger"
                      onClick={this.onRestartClicked}
                    >
                      Restart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {savedIntervals.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
