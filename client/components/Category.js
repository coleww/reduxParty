import React from 'react';
import { Link } from 'react-router';
import Clue from './clue'

// a single column of the game board.
// TODO: make the clues be their own component
// TODO: make the clue values be variable (round 2, etc.)

const Category = React.createClass({
  render() {
    const category = this.props.category
    const i = this.props.i
    return (
      <div className="category-column">
        <div className="category-title category-item">
          {category.title}
        </div>
        {category.clues.map((clue, j) =>
          <Clue {...this.props} key={j} categoryIndex={i} clueIndex={j} clue={clue} />)}
      </div>
    )
  }
});

export default Category;