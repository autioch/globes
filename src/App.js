/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-undefined */
/* eslint-disable no-magic-numbers */
import React, { Component } from 'react';
import { Game, RecordsController, TargetsController } from './components';
import autobind from 'autobind-decorator';
import './App.css';
import statsConfig from './components/stats/config';

const clone = (obj) => JSON.parse(JSON.stringify(obj));

const DEFAULT_LIFE = 5;

export default class App extends Component {
  state = {
    pause: false,
    message: undefined,
    options: {},
    records: undefined,
    recordsHeaders: undefined,
    stats: clone(statsConfig),
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
    this.recordsController.reset();
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
    const newStats = clone(statsConfig);

    newStats.life.value = DEFAULT_LIFE;

    this.setState({
      message: undefined,
      stats: newStats
    });
    this.gameLoopTimeout = setTimeout(this.gameLoop, 10);
    setTimeout(this.targetAdd, 10);
  }

  @autobind
  gameLoop() {
    const runTime = Date.now();
    const { targets, lastRun, dimensions } = this.state;
    const timeDiff = runTime - lastRun;

    this.targetsController.age(timeDiff, dimensions);

    const deadCount = targets.filter((entity) => !!entity.dead).length;
    const life = this.state.stats.life.value - deadCount;

    this.setState({
      lastRun: runTime,
      targets: targets.filter((entity) => !entity.dead),
      stats: {
        life: {
          value: life,
          ...this.state.stats.life
        },
        ...this.state.stats
      }
    });
    if (life < 1) {
      this.gameOver();
    } else {
      this.gameLoopTimeout = setTimeout(this.gameLoop, 10);
    }
  }

  @autobind
  gameOver() {
    clearTimeout(this.targetAddTimeout);
    clearTimeout(this.gameLoopTimeout);
    this.recordsController.add([10]);
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
      targets: this.targetsController.targets.slice(),
      stats: {
        active: {
          value: this.targetsController.targets.length,
          ...this.state.stats.active
        },
        ...this.state.stats
      }
    });
    this.targetAddTimeout = setTimeout(this.targetAdd, this.state.targetAddInterval);
  }

  @autobind
  targetHit(id) {
    this.targetsController.hit(id);
    this.setState({
      targets: this.targetsController.targets.slice(),
      stats: {
        hit: {
          value: this.state.stats.hit.value + 1,
          ...this.state.stats.hit
        },
        active: {
          value: this.targetsController.targets.length,
          ...this.state.stats.active
        },
        ...this.state.stats
      }
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
