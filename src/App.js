/* eslint-disable no-console */
/* eslint-disable no-undefined */
/* eslint-disable no-magic-numbers */
import React, { Component } from 'react';
import { Game, RecordsController, TargetsController } from './components';
import autobind from 'autobind-decorator';
import './App.css';

export default class App extends Component {
  state = {
    pause: false,
    message: undefined,
    options: {},
    records: undefined,
    recordsHeaders: undefined,
    stats: {},
    targets: [],
    targetAddInterval: 1500,
    dimensions: {
      width: 400,
      height: 400
    },
    lastRun: Date.now()
  }

  constructor(props) {
    super(props);
    this.recordsController = new RecordsController({});
    this.targetsController = new TargetsController({});
  }

  componentDidMount() {
    this.gamePrepare();
  }

  @autobind
  gamePrepare() {
    this.setState({
      records: undefined,
      message: {
        title: 'Globes!',
        content: 'Hit the globes, avoid the skulls!',
        follow: 'Click to continue...',
        onClick: this.gameStart
      }
    });
  }

  @autobind
  gameStart() {
    this.setState({
      message: undefined
    });
    this.gameLoop();
    this.targetAdd();
  }

  @autobind
  gameLoop() {
    const runTime = Date.now();
    const { targets, lastRun, dimensions } = this.state;
    const timeDiff = runTime - lastRun;

    this.targetsController.age(timeDiff, dimensions);

    this.setState({
      lastRun: runTime,
      targets: targets.filter((entity) => !entity.dead)
    });
    this.gameLoopRaf = requestAnimationFrame(this.gameLoop);
  }

  @autobind
  gameOver() {
    clearTimeout(this.targetAddTimeout);
    cancelAnimationFrame(this.gameLoopRaf);
    this.recordsController.add({
      points: 10
    });
    this.setState({
      paused: true,
      records: this.recordsController.records,
      recordsHeaders: ['points']
    });
  }

  @autobind
  targetAdd() {
    this.targetsController.add(this.state.dimensions);
    this.setState({
      targets: this.targetsController.targets.slice()
    });
    this.targetAddTimeout = setTimeout(this.targetAdd, this.state.targetAddInterval);
  }

  @autobind
  targetHit(id) {
    this.targetsController.hit(id);
    this.setState({
      targets: this.targetsController.targets.slice()
    });
  }

  render() {
    const { dimensions, paused, message, options, records, recordsHeaders, stats, targets } = this.state;

    return (
      <Game
        paused={paused}
        message={message}
        options={options}
        records={records} recordsHeaders={recordsHeaders} recordsClose={this.gamePrepare}
        stats={stats}
        targets={targets} targetHit={this.targetHit} dimensions={dimensions}
      />
    );
  }
}
