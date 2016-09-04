import React from 'react';
import { Link } from 'react-router';
import PlayerManager from './PlayerManager';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">
          <Link to="/">JEOPARDY</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
        <PlayerManager {...this.props} />
      </div>
    )
  }
});

export default Main;