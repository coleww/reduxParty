import React from 'react';

const Answer = React.createClass({
  componentDidMount () {
    this.props.activatePlayers();
  },
  render() {
    const categoryId = this.props.params.categoryId;
    const clueId = this.props.params.clueId;
    const clue = this.props.categories[categoryId].clues[clueId];
    return (
      <div className="game-board">
        <div className="answer">
          Q: {clue.question}
          <br />
          A: What is {clue.answer}
        </div>
      </div>
    )
  }
});

export default Answer;