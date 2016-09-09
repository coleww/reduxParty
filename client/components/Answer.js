import React from 'react';
const Answer = React.createClass({
  render() {
    const categoryIdx = this.props.params.categoryIdx;
    const clueIdx = this.props.params.clueIdx;
    const clue = this.props.categories[categoryIdx].clues[clueIdx];
    let answer;
    if (!this.props.location.query.display) {
      answer = (
        <div className="clue-answer">A: What is {clue.answer}</div>
      );
    }
    return (
      <div className="clue">
        <div className="clue-question">Q: {clue.question}</div>
        {answer}
      </div>
    );
  }
});

export default Answer;