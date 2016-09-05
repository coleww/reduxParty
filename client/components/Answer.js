import React from 'react';

const Answer = React.createClass({
  componentDidMount () {
    this.props.activatePlayers();
  },
  render() {
    const categoryIdx = this.props.params.categoryIdx;
    const clueIdx = this.props.params.clueIdx;
    const clue = this.props.categories[categoryIdx].clues[clueIdx];
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