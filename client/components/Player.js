import React from 'react';

// a single column of the game board.

const Player = React.createClass({
  render() {
    const player = this.props.player
    return (
      <div className="player">
        <div className="player-name">
          {player.name}
        </div>
        <div className="player-score">
          ${player.score}
        </div>
      </div>
    )
  }
});

export default Player;