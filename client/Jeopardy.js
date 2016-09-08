import React from 'react';
import { render } from 'react-dom';

// styles
import css from './styles/style.styl';

// components
import App from './components/App';
import GameBoard from './components/GameBoard'; // main game grid, basically a collection of categories
import Answer from './components/Answer'; // Displaying a single Clue (maybe thats a better word?) given a category and a $$$ amount
import GameDisplay from './components/GameDisplay';
import Welcome from './components/Welcome';

import { Router, Route, IndexRoute } from 'react-router';
import createStorageSyncListener from './middleware/localStorageSyncListener'
import { Provider } from 'react-redux';
import store, { history } from './store';
import { saveState } from './middleware/localStoragePersistence'
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome}></IndexRoute>
        <Route path="game" component={GameDisplay}>
          <IndexRoute component={GameBoard}></IndexRoute>
          <Route path="category/:categoryIdx/clue/:clueIdx" component={Answer}></Route>
        </Route>
      </Route>
    </Router>
  </Provider>
);

const isDisplayBoard = window.location.search.match(/display/)
if (isDisplayBoard) {
  window.addEventListener('storage', createStorageSyncListener(store));
} else {
  store.subscribe(() => {
    saveState(store.getState())
  })
}

render(router, document.getElementById('root'));
