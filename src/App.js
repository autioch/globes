// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// import './index.scss';
//
// ReactDOM.render(<App />, document.getElementById('root'));

import React, { Component } from 'react';
import { Cover, Message, Options, Records, Stats, Targets } from './components';
import autobind from 'autobind-decorator';
import './App.css';
import createStore from './store';
import actions from './actions';
import initialState from './store/initialState';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.store = createStore(initialState, actions, (state) => this.setState(state));
    this.state = this.store.getState();
  }

  componentDidMount() {
    this.gamePrepare();
  }

  @autobind
  gamePrepare() {
    this.store.gamePrepare(this.gameStart);
  }

  @autobind
  gameStart() {
    this.store.gameStart();
    this.gameLoopTimeout = setTimeout(this.gameLoop, 10);
    setTimeout(this.targetAdd, 10);
  }

  @autobind
  gameLoop() {
    this.store.gameLoop();
    if (this.store.getState().stats.life.value < 1) {
      this.gameOver();
    } else {
      this.gameLoopTimeout = setTimeout(this.gameLoop, 10);
    }
  }

  @autobind
  gameOver() {
    clearTimeout(this.targetAddTimeout);
    clearTimeout(this.gameLoopTimeout);
    this.store.gameOver();
  }

  @autobind
  targetAdd() {
    this.store.targetAdd();
    this.targetAddTimeout = setTimeout(this.targetAdd, this.state.targetAddInterval);
  }

  render() {
    const { targets, dimensions, options, stats, isPaused, isOver, records, recordsHeaders, message } = this.state;

    return (
      <div className="qb-game">
        {<Targets targets={targets} onClick={this.store.targetHit} dimensions={dimensions}/>}
        {<Options options={options} />}
        {<Stats stats={stats} />}
        {isPaused ? <Cover /> : ''}
        {isOver ? <Records records={records} headers={recordsHeaders} onClick={this.gamePrepare} /> : ''}
        {message ? <Message message={message} /> : ''}
      </div>
    );
  }
}
