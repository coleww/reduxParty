import React from 'react';
import { Link } from 'react-router';

const Category = React.createClass({
  render() {
    const clue = this.props.clue;

    // this method of conditionally rendering the thing seems...awfully wrong >_<
    // but also the internet generally seems confused as to how this should be done inside JSX, so..., let's roll with it B)
    let clueLink;
    if (!clue.answered) {
      console.log(this.props.location.query)
      const categoryIndex = this.props.categoryIndex;
      const clueIndex = this.props.clueIndex;
      clueLink = (
        <Link className="clue-value" onClick={this.props.answerClue.bind(null, categoryIndex, clueIndex)} to={{pathname: `/category/${categoryIndex}/clue/${clueIndex}`, query: {...this.props.location.query}}} >
          ${clue.value}
        </Link>
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