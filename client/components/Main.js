import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    const { children, ...rest } = this.props;
    return (
      <div>
        <br />
        {React.cloneElement(children, rest)}
      </div>
    );
  }
});

export default Main;