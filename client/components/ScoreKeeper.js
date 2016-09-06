import React from 'react';

const ScoreKeeper = React.createClass({
  render() {
    // if we aren't on an Answer route, we shouldn't render the scorekeeper at all
    // seems hack-ish. but otherwise the gameBoard will throw errors if there are active players still
    if (typeof this.props.params.categoryIdx === 'undefined') return null
    const categoryIdx = this.props.params.categoryIdx;
    const clueIdx = this.props.params.clueIdx;
    const clue = this.props.categories[categoryIdx].clues[clueIdx];
    return (
      <div className="player-score-keeper">
        <button className="player-score-subtract" onClick={this.props.decrementScore.bind(null, this.props.player.id, clue.value)}>-</button>
        <button className="player-score-add" onClick={this.props.incrementScore.bind(null, this.props.player.id, clue.value)}>+</button>
      </div>
    )
  }
});

export default ScoreKeeper;