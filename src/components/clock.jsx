import React, { PureComponent } from "react";

export class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  render() {
    return (
      <div className="clock">
        <div className="item">
          <h1>{this.dayInWeek()}</h1>
          <span>Day</span>
        </div>
        <div className="item">
          <h1>{this.state.date.getHours()}</h1>
          <span>Hours</span>
        </div>
        <div className="item">
          <h1>{this.state.date.getMinutes()}</h1>
          <span>Minutes</span>
        </div>
        <div className="item">
          <h1>{this.state.date.getSeconds()}</h1>
          <span>Seconds</span>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const refreshTime = 100;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, refreshTime);
  }

  // Clear interval when the clock is unmounted
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  dayInWeek() {
    let day = this.state.date.getDay();
    let days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    return days[day];
  }
}
