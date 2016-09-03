import React from 'react';
import { render } from 'react-dom';

// styles
import css from './styles/style.styl';

// components
import App from './components/App';
import GameBoard from './components/GameBoard'; // main game grid, basically a collection of categories
import Answer from './components/Answer'; // Displaying a single Clue (maybe thats a better word?) given a category and a $$$ amount
import PlayerManager from './components/PlayerManager'; // contains several player components, allows for adding/deducting the money

import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={GameBoard}></IndexRoute>
        <Route path="/category/:categoryId/clue/:clueId" component={Answer}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'))