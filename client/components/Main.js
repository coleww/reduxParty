import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    const { children, ...rest } = this.props;
    return (
      <div>
        <h1 className="title">
          <Link to={{pathname: "/game", query: this.props.location.query}}>JEOPARDY</Link>
        </h1>
        {React.cloneElement(children, rest)}
      </div>
    );
  }
});

export default Main;