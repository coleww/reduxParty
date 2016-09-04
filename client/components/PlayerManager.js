import React from 'react';
import Player from './Player'

const PlayerManager = React.createClass({
  render() {
    var players = this.props.players
    return (
      <div className="player-manager">
        {players.map((player, i) =>
            <Player {...this.props} key={i} player={player} />)}
      </div>
    )
  }
});

export default PlayerManager;