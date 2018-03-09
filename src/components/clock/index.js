import React, { Component } from 'react';
import autobind from 'autobind-decorator';

const UPDATE_PERIOD = 1000;
const PART_LENGTH = 2;
const PART_FILL = '0';
const format = (num) => num.toString().padStart(PART_LENGTH, PART_FILL);

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.update();
  }

  @autobind
  update() {
    const now = new Date();
    const hour = now.getHours().toString();
    const minute = format(now.getMinutes());
    const second = format(now.getSeconds());

    this.timeout = setTimeout(this.update, UPDATE_PERIOD);
    this.setState({
      hour,
      minute,
      second
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { hour, minute, second } = this.state;

    return (
      <div>{hour}:{minute}:{second}</div>
    );
  }
}
