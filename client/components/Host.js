import React from 'react';
import { Link } from 'react-router';
const Host = React.createClass({
  startNewGame () {
    this.props.fetchCategories();
    this.props.resetPlayers();
  },
  render () {
    // if we are in a display tab, we also don't want to render the Host controls
    if (this.props.location.query.display) return null;
    const loadCategoriesText = this.props.gameState.fetching ? 'Fetching data from the server...' : 'Start a new game with random categories';

    return (
      <div className="host-controls">
        <Link className="host-open-display" to={{pathname: '/game', query: {display: true}}} target="_blank">
          Open display tab
        </Link>
        <br />
        <br />
        <button className="fetch-categories" onClick={this.startNewGame}>
          {loadCategoriesText}
        </button>


      </div>
    );
  }
});

export default Host;