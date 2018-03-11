/* eslint-disable no-magic-numbers */
import React, { Component } from 'react';
import autobind from 'autobind-decorator';

export default class Intervals extends Component {
  componentDidMount() {
    this.targetAdd();
    this.gameLoopTimeout = setTimeout(this.gameLoop, 10);
  }

  componentWillUnmount() {
    clearTimeout(this.gameLoopTimeout);
    clearTimeout(this.targetAddTimeout);
  }

  @autobind
  targetAdd() {
    this.props.actions.targetAdd();
    this.targetAddTimeout = setTimeout(this.targetAdd, 1000);
  }

  @autobind
  gameLoop() {
    const { actions } = this.props;

    actions.gameDuration().targetDiminish().targetDie();

    if (actions.getState().stats.life.value < 1) {
      actions.gameOver().recordAdd().recordShow();
    } else {
      this.gameLoopTimeout = setTimeout(this.gameLoop, 10);
    }
  }

  render() { // eslint-disable-line class-methods-use-this
    return (<div></div>);
  }
}
