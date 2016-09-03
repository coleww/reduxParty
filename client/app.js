import React from 'react';
import { render } from 'react-dom';

// styles
import css from './styles/style.styl';

// components
import Main from './components/Main';
import GameBoard from './components/GameBoard'; // main game grid, basically a collection of categories
import Answer from './components/Answer'; // Displaying a single Clue (maybe thats a better word?) given a category and a $$$ amount
import PlayerManager from './components/PlayerManager'; // contains several player components, allows for adding/deducting the money

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={GameBoard}></IndexRoute>
      <Route path="/category/:categoryId/value/:value" component={Answer}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'))