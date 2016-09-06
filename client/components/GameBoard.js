import React from 'react';
import Category from './category';

const GameBoard = React.createClass({
  componentWillMount () {
    this.props.deactivatePlayers();
  },
  render() {
    return (
      <div className="game-board">
        {this.props.categories.map((category, i) =>
          <Category {...this.props} key={i} i={i} category={category} />)}
      </div>
    );
  }
});

export default GameBoard;