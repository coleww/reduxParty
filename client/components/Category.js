import React from 'react';
import { Link } from 'react-router';

// a single column of the game board.

const Category = React.createClass({
  render() {
    const category = this.props.category
    return (
      <div className="category-column">
        <div className="category-title category-item">
          {category.title}
        </div>
        <div className="category-clue category-item">
          $200
        </div>
        <div className="category-clue category-item">
          $400
        </div>
        <div className="category-clue category-item">
          $600
        </div>
        <div className="category-clue category-item">
          $800
        </div>
        <div className="category-clue category-item">
          $1000
        </div>
      </div>
    )
  }
});

export default Category;