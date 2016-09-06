import React from 'react';
import { Link } from 'react-router';
const Host = React.createClass({
  render() {
    // if we are in a display tab, we also don't want to render the Host controls
    if (this.props.location.query.display) return null;

    return (
      <div className="host-controls">
        <Link className="host-open-display" to={{pathname: "/game", query: {display: true}}} target="_blank">Open a display tab</Link>
      </div>
    );
  }
});

export default Host;