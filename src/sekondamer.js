import React from "react";

class Secondamer extends React.Component {
  state = {
    second: 0,
    minute: 0,
    hour: 0,
    interval: "",
    disabled: false,
    savedIntervals: [],
  };

  onStart = () => {
    const a = setInterval(() => {
      const { second, hour, minute, disabled } = this.state;
      if (second === 59) {
        if (minute === 59) {
          this.setState({
            second: 0,
            minute: 0,
            hour: hour + 1,
          });
        } else {
          this.setState({
            second: 0,
            minute: minute + 1,
          });
        }
      } else {
        this.setState({
          second: second + 1,
        });
      }
    }, 1000);

    this.setState({
      disabled: true,
      interval: a,
    });
  };

  onStop = () => {
    clearInterval(this.state.interval);
    this.setState({
      disabled: false,
    });
  };

  onInterval = () => {
    const { hour, minute, second, savedIntervals } = this.state;
    savedIntervals.push(hour + ":" + minute + ":" + second);
    this.setState({
      savedIntervals,
    });
  };

  onRestartClicked = () => {
    this.onStop();
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
      savedIntervals: [],
    });
  };

  render() {
    const { hour, minute, second, disabled, savedIntervals } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="card text-center">
              <div>
                <h1>Stopwatch</h1>
              </div>
              <div className="card-body">
                <h3>
                  {hour}:{minute}:{second}
                </h3>
              </div>
              <div className="card-footer">
                <div className="row"  >
                  <div className="col-md-3">
                    <button
                      className="btn  btn-success"
                      onClick={this.onStart}
                      disabled={disabled}
                    >
                      Start
                    </button>
                  </div>
                  <div className="col-md-3">
                    <button className="btn  btn-warning" onClick={this.onStop}>
                      Stop
                    </button>
                  </div>
                  <div className="col-md-3">
                    <button
                      className="btn  btn-info"
                      onClick={this.onInterval}
                      disabled={!disabled}
                    >
                      Interval
                    </button>
                  </div>
                  <div className="col-md-3">
                    <button
                      className="btn  btn-danger"
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

export default Secondamer;
