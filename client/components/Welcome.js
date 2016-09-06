import React from 'react';
import { Link } from 'react-router';

const Welcome = React.createClass({
  componentDidMount () {
    this.props.activatePlayers();
  },
  render() {
    return (
      <div className="welcome-message">
        WELCOME 2 JEOPARDY!
        <Link to="/game">Start a new game!</Link>
      </div>
    );
  }
});

export default Welcome;