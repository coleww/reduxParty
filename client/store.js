import { applyMiddleware, createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createStorageSyncMiddleware from './middleware/localStorageSyncMiddleware';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers/index';

import categories from './data/categories';
import players from './data/players';
import gameState from './data/gameState';

import { loadState } from './middleware/localStoragePersistence';

const blankState = {
  categories,
  players,
  gameState
};

const defaultState = loadState() || blankState;
const middleware  = applyMiddleware(ReduxThunk, createStorageSyncMiddleware());
const enhancers = compose(middleware, window.devToolsExtension && window.devToolsExtension());

// TODO: add dev/prod logic to ensure this doesn't "go live", lol
const store = createStore(rootReducer, defaultState, enhancers);



export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
