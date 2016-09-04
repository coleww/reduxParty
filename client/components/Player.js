import React from 'react';
const Player = React.createClass({
  updateName(e) {
    e.preventDefault();
    this.props.updateName(this.props.player.id, this.refs.playerName.value);
  },
  render() {
    const player = this.props.player;
    let playerName;
    if (player.editing) {
      playerName = (
        <form onSubmit={this.updateName}>
          <input ref="playerName" autoFocus placeholder={player.name} />
        </form>)
    } else {
      playerName = (
        <div onClick={this.props.editName.bind(null, this.props.player.id)} className="player-name">
          {player.name}
        </div>
      )
    }
    return (
      <div className="player">
        {playerName}
        <div className="player-score">
          ${player.score}
        </div>
      </div>
    )
  }
});

export default Player;