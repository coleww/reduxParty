import React from 'react';
import { Link } from 'react-router';

// a single column of the game board.

const PlayerManager = React.createClass({
  render() {
    return (
      <div className="players-interface">
        I am the player manager, i should be rendering out 3 player components here. maybe you can add/delete players? that might be cool too!
      </div>
    )
  }
});

export default PlayerManager;