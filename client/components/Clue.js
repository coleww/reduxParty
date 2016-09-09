import React from 'react';
import { withRouter } from 'react-router';

const Category = React.createClass({
  answerClue () {
    if (this.props.location.query.display) return;
    const categoryIndex = this.props.categoryIndex;
    const clueIndex = this.props.clueIndex;
    this.props.answerClue(categoryIndex, clueIndex);
    this.props.activatePlayers();
    this.props.router.push(`game/category/${categoryIndex}/clue/${clueIndex}`);
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

export default withRouter(Category);