// Redux uses 1 reducer made up of many mini-reducers.
// action types/keys must be unique, so it's basically a gigantic huge switch statement

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// treats route changes as though they are state like any other action, so the routerReducer must be included as well

import players from './players';
import categories from './categories';

const rootReducer = combineReducers({players, categories, routing: routerReducer});

export default rootReducer;
