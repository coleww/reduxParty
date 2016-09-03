import React from 'react';
import { Link } from 'react-router';

// a single column of the game board.
// TODO: make the clues be their own component
// TODO: make the clue values be variable (round 2, etc.)

const Category = React.createClass({
  render() {
    const clue = this.props.clue

    // this method of conditionally rendering the thing seems...awfully wrong >_<
    // but also the internet generally seems confused as to how this should be done inside JSX, so..., let's roll with it B)
    let clueLink;
    if (!clue.answered) {
      const categoryIndex = this.props.categoryIndex
      const clueIndex = this.props.clueIndex
      clueLink = (
        <Link onClick={this.props.answerClue.bind(null, categoryIndex, clueIndex)} to={`/category/${categoryIndex}/clue/${clueIndex}`}>
          ${clue.value}
        </Link>
      )
    }

    return (
      <div className="category-clue category-item">
        {clueLink}
      </div>
    )
  }
});

export default Category;