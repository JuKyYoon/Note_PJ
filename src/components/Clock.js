import React from 'react';
class Clockview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <a>
        It is {this.state.date.toLocaleTimeString()}
      </a>
    );
  }
}
const Clock = () => {
    return (
        <Clockview/>
    );
};
export default Clock;