import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import categories from './data/categories';
import answers from './data/answers';

const defaultState = {
  categories,
  answers
};

const store = createStore(rootReducer, defaultState);

const history = syncHistoryWithStore(browserHistory, store);

export history;
export default store;
