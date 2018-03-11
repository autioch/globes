import React, { Component } from 'react';
import { Cover, Message, Options, Records, Stats, Targets, Intervals, Timer } from '../index';
import autobind from 'autobind-decorator';

import './styles.css';

export default class Game extends Component {
  @autobind
  restartGame() {
    this.props.actions.recordHide().gamePrepare().messageShow('welcome');
  }

  @autobind
  startGame() {
    this.props.actions.messageShow().gameStart();
  }

  render() {
    const { state, actions } = this.props;
    const { targets, dimensions, options, stats, records, recordProps, message, duration, isStarted, isPaused } = state;
    const { targetHit } = actions;

    return (
      <div className="qb-game">
        <div className="qb-game__sidebar" style={{
          width: dimensions.sidebarWidth
        }}>
          {isStarted && !isPaused ? <Intervals actions={actions}/> : ''}
          {<Options options={options} />}
          {<Stats stats={stats} />}
          {<Timer duration={duration} />}
        </div>
        {<Targets
          targets={targets}
          onClick={targetHit}
          width={dimensions.targetsWidth}
          height={dimensions.targetsHeight}
        />}
        {isPaused ? <Cover /> : ''}
        {records ? <Records records={records} headers={recordProps} onClick={this.restartGame} /> : ''}
        {message ? <Message message={message} onClick={this.startGame}/> : ''}
      </div>
    );
  }
}
