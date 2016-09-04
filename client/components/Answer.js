import React from 'react';

// given a category and a $value, should grab the corresponding answer

const Answer = React.createClass({
  render() {
    const categoryId = this.props.params.categoryId
    const clueId = this.props.params.clueId
    const clue = this.props.categories[categoryId].clues[clueId]
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