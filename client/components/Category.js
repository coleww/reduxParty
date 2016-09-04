import React from 'react';
import Clue from './clue'

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
        <div className="clearfix">&nbsp;</div>
      </div>
    )
  }
});

export default Category;