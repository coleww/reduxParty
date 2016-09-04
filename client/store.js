import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import categories from './data/categories';
import players from './data/players'

// this will eventually just be a skeleton of category names/ids (fetched from the API when a game starts)
// and blank player1/2/3 objects. (editable via the player manager)
// it should also proooobably save which answer/clue things are used for each category/value combo...for time traveling purposes and whatnot
// i.e, the first time we go to category/1/value/300, we should fetch a clue, but afterwards we should just use the one we fetched
const defaultState = {
  categories,
  players
};

// TODO: add dev/prod logic to ensure this doesn't "go live", lol
const store = createStore(rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension());

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer)
  })
}

export default store;
