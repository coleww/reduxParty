import React from 'react';
import Player from './Player'
// a single column of the game board.

const PlayerManager = React.createClass({
  render() {
    console.log(this.props, "HEYYY")
    var players = this.props.players
    return (
      <div className="player-manager">
        {players.map((player, i) =>
            <Player {...this.props} key={i} playerIndex={i} player={player} />)}
      </div>
    )
  }
});

export default PlayerManager;