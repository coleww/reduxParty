import React from 'react';

// when clicking deduct: deactivate that player, subtract that money. if no player left active, navigate to '/'
// when clicking assign: deactivate all players, assign that player the money, navigate to '/'


const ScoreKeeper = React.createClass({
  render() {
    const categoryId = this.props.params.categoryId;
    const clueId = this.props.params.clueId;
    const clue = this.props.categories[categoryId].clues[clueId];
    return (
      <div className="player-score-keeper">
        <button className="player-score-subtract" onClick={this.props.decrementScore.bind(null, this.props.player.id, clue.value)}>-</button>
        <button className="player-score-add" onClick={this.props.incrementScore.bind(null, this.props.player.id, clue.value)}>+</button>
      </div>
    )
  }
});

export default ScoreKeeper;