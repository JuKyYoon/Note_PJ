import React from 'react';
import './Setting.css';



const StopwatchTicker = React.createClass({
  render() {
    let degStyle = {
      transform: `rotate(${this.props.deg}deg)`
    };
    return (
      <div className="tick-wrapper" style={degStyle}>
        <div className="tick"></div>
      </div>    
    );
  }
});

const Stopwatch = React.createClass({
  getInitialState() {
    return {
      second: 61,
      deg: 0
    };
  },
  componentDidMount: function () {
    this.onTimer();
    this.onTick();
  },
  onTimer() {
    if (this.state.second !== 0) {
      this.setState({
        second: this.state.second - 1
      }, () => { window.setTimeout(this.onTimer, 1000) });  
    } else {
       this.setState({
        second: 61
      });
    }
  },
  onTick() {
    if (this.state.deg !== 360) {
      this.setState({
        deg: this.state.deg + 1.5 / 4
      }, () => { window.setTimeout(this.onTick, 125 / 2 ) });
    } else {
       this.setState({
        deg: 0
      });
    }
  },
  onClickHandler() {
    this.setState({
      second: 60,
      deg: 0
    });
    if (this.state.deg === 0) {
      this.onTimer();
      this.onTick();
    }
  },
  render() {
    return (
      <div className="stopwatch" onClick={ this.onClickHandler }>
        <div className="second">{ this.state.second }</div>
        <StopwatchTicker deg={this.state.deg}/>
      </div>
    );
  }
});



const Setting = () => {
    return (
        <div className="WeatherPage">
           <Stopwatch />
        </div>
    );
};

export default Setting;
