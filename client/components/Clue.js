import React from 'react';

const Category = React.createClass({
  answerClue () {
    const categoryIndex = this.props.categoryIndex;
    const clueIndex = this.props.clueIndex;
    this.props.answerClue(categoryIndex, clueIndex);
    this.props.activatePlayers();
    this.props.history.push(`game/category/${categoryIndex}/clue/${clueIndex}`);
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