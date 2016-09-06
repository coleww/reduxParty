import React from 'react';
import PlayerManager from './PlayerManager';

const GameDisplay = React.createClass({
  render() {
    return (
      <div className="game">
        <div className="game-board">
          {React.cloneElement(this.props.children, this.props)}
        </div>
        <PlayerManager {...this.props} />
      </div>
    );
  }
});

export default GameDisplay;