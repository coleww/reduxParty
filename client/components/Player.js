import React from 'react';
import ScoreKeeper from './scoreKeeper';

const Player = React.createClass({
  updateName(e) {
    e.preventDefault();
    this.props.updateName(this.props.player.id, this.refs.playerName.value);
  },
  render() {
    const player = this.props.player;

    // logic for editing the user's name
    let playerName;
    if (player.editing) {
      playerName = (
        <form onSubmit={this.updateName}>
          <input ref="playerName" autoFocus placeholder={player.name} className="player-name-edit"/>
        </form>
      );
    } else {
      playerName = (
        <div onClick={this.props.editName.bind(null, this.props.player.id)} className="player-name">
          {player.name}
        </div>
      );
    }

    // logic for showing/hiding the score keeper buttons
    let scoreKeeping;
    if (player.active) {
      scoreKeeping = (
        <ScoreKeeper className="player-score-keeper" player={player} {...this.props} />
      );
    }

    return (
      <div className="player">
        {playerName}
        <div className="player-score">
          ${player.score}
        </div>
        {scoreKeeping}
      </div>
    );
  }
});

export default Player;
