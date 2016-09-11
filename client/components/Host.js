import React from 'react';
import { Link } from 'react-router';
const Host = React.createClass({
  render () {
    // if we are in a display tab, we also don't want to render the Host controls
    if (this.props.location.query.display) return null;
    return (
      <div className="host-controls">
        <Link className="host-open-display" to={{pathname: '/game', query: {display: true}}} target="_blank">
          Open display tab
        </Link>
        <br />
        <br />
        <button className="fetch-categories" onClick={this.props.fetchCategories.bind(null)}>
          'Load new categories'
        </button>
        <button className="reset-players" onClick={this.props.resetPlayers.bind(null)}>
          'Reset players'
        </button>

      </div>
    );
  }
});

export default Host;