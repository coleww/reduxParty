import React from 'react';
import { Link } from 'react-router';

// given a category and a $value, should grab the corresponding answer

const Answer = React.createClass({
  render() {
    return (
      <div className="single-answer">
        {this.props.categories.length}
        i am a little answer! when I pop up, the player manager should add appropriate +/- buttons, and also display the correct answer...somewhere?
      </div>
    )
  }
});

export default Answer;