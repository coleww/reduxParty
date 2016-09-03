import React from 'react';
import { Link } from 'react-router';

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
        <div className="category-clue category-item">
          <Link onClick={this.props.answerClue.bind(null, i, 200)} to={`/category/${i}/value/${200}`}>
            $200
          </Link>
        </div>
        <div className="category-clue category-item">
          <Link onClick={this.props.answerClue.bind(null, i, 400)} to={`/category/${i}/value/${400}`}>
            $400
          </Link>
        </div>
        <div className="category-clue category-item">
          <Link onClick={this.props.answerClue.bind(null, i, 600)} to={`/category/${i}/value/${600}`}>
            $600
          </Link>
        </div>
        <div className="category-clue category-item">
          <Link onClick={this.props.answerClue.bind(null, i, 800)} to={`/category/${i}/value/${800}`}>
            $800
          </Link>
        </div>
        <div className="category-clue category-item">
          <Link onClick={this.props.answerClue.bind(null, i, 1000)} to={`/category/${i}/value/${1000}`}>
            $1000
          </Link>
        </div>
      </div>
    )
  }
});

export default Category;