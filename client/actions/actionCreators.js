import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';

// if a player answers the answer
export function incrementScore (playerId, amount) {
  return {
    type: 'INCREMENT_SCORE',
    playerId,
    amount
  };
}

export function decrementScore (playerId, amount) {
  return {
    type: 'DECREMENT_SCORE',
    playerId,
    amount
  };
}

export function editName (playerId) {
  return {
    type: 'EDIT_NAME',
    playerId
  };
}

export function updateName (playerId, newName) {
  return {
    type: 'UPDATE_NAME',
    playerId,
    newName
  };
}

export function answerClue (categoryIdx, clueIdx) {
  return {
    type: 'ANSWER_CLUE',
    categoryIdx,
    clueIdx
  };
}

export function activatePlayers () {
  return {
    type: 'ACTIVATE_PLAYERS'
  };
}

export function deactivatePlayers () {
  return {
    type: 'DEACTIVATE_PLAYERS'
  };
}

export function receiveCategories (categories) {
  return {
    type: 'RECEIVE_CATEGORIES',
    categories: categories
  };
}

export function isFetchingCategories () {
  return {
    type: 'FETCHING_CATEGORIES'
  };
}

export function fetchCategories () {
  return function (dispatch) {
      dispatch(isFetchingCategories())
      return fetch(process.env.API_URL)
        .then(response => response.json())
        .then(json => {
          dispatch(receiveCategories(json));
          dispatch(push('./game'));
          // TODO: handle errors here! probably just display a message to try re-fetching
        })
    }
}

