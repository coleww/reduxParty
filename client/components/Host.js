import React from 'react';
import { Link } from 'react-router';
const Host = React.createClass({
  render() {
    // if we are in a display tab, we also don't want to render the Host controls
    if (this.props.location.query.display) return null;
    const loadCategoriesText = this.props.gameState.fetching ? 'Fetching data from the server...' : 'Start new round with random categories'

    return (
      <div className="host-controls">
        <button className="fetch-categories" onClick={this.props.fetchCategories.bind(null)}>{loadCategoriesText}</button>

        <Link className="host-open-display" to={{pathname: "/game", query: {display: true}}} target="_blank">Open a display tab</Link>

      </div>
    );
  }
});

export default Host;