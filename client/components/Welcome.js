import React from 'react';
import { Link } from 'react-router';

const Welcome = React.createClass({
  componentDidMount () {
    this.props.activatePlayers();
  },
  render() {
    return (
      <div className="welcome-message">
        WELCOME TO JEOPARDY!

        <br />
        Use one browser tab for the "host" to see answers and assign points, and another tab to display the board to the players and audience. Data is synced between the two via localStorage.

        <br />
        <Link to="/game">Start a new game!</Link>
        <br/><br/>
        built with React and Redux, by <a href="http://www.colewillsea.com">Cole Willsea</a>. (<a href="https://github.com/coleww/reduxparty">source code</a>)
      </div>
    );
  }
});

export default Welcome;