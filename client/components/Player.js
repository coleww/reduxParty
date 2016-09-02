import React from 'react';
import { Link } from 'react-router';

// a single column of the game board.

const Player = React.createClass({
  render() {
    return (
      <div className="player">
        I am a single player! whooo! eventually i should get numbered 1-3, and you should be able to edit my name and track how much money I have won
      </div>
    )
  }
});

export default Player;