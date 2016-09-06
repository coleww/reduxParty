import React from 'react';
import PlayerManager from './PlayerManager';
import { Link } from 'react-router';
const GameDisplay = React.createClass({
  render() {
    return (
      <div className="game">
        <div className="game-board">
          {React.cloneElement(this.props.children, this.props)}
        </div>
        <PlayerManager {...this.props} />
        <Link to={{pathname: "/game", query: {display: true}}}>see display!</Link>
      </div>
    );
  }
});

export default GameDisplay;