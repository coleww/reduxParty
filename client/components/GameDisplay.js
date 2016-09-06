import React from 'react';
import PlayerManager from './PlayerManager';
import Host from './Host';
import { Link } from 'react-router';

const GameDisplay = React.createClass({
  render() {
    return (
      <div className="game">
        <div className="game-board">
          {React.cloneElement(this.props.children, this.props)}
        </div>
        <PlayerManager {...this.props} />
        <Host {...this.props} />
      </div>
    );
  }
});

export default GameDisplay;