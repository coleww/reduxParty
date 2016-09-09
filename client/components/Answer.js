import React from 'react';
import { withRouter } from 'react-router';

const Answer = React.createClass({
  backToBoard () {
    this.props.router.push('/game');
  },
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
      <div className="clue" onClick={this.backToBoard}>
        <div className="clue-question">Q: {clue.question}</div>
        {answer}
      </div>
    );
  }
});

export default withRouter(Answer);