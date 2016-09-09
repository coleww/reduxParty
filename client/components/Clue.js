import React from 'react';
import { Link } from 'react-router';
import { history } from '../store';

const Category = React.createClass({
  answerClue () {
    const categoryIndex = this.props.categoryIndex;
    const clueIndex = this.props.clueIndex;
    this.props.answerClue(categoryIndex, clueIndex);
    this.props.activatePlayers();
    history.push(`game/category/${categoryIndex}/clue/${clueIndex}`);
  },
  render() {
    const clue = this.props.clue;
    let clueLink;
    if (!clue.answered) {
      clueLink = (
        <div className="clue-value" onClick={this.answerClue} >
          ${clue.value}
        </div>
      );
    }

    return (
      <div className="category-clue category-item">
        {clueLink}
      </div>
    );
  }
});

export default Category;