import { applyMiddleware, createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createStorageMiddleware from './localStorageMiddleware';

import rootReducer from './reducers/index';

import categories from './data/categories';
import players from './data/players';

const defaultState = {
  categories,
  players
};

const localStorageMiddleware  = applyMiddleware(createStorageMiddleware())
const enhancers = compose(localStorageMiddleware, window.devToolsExtension && window.devToolsExtension())

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
