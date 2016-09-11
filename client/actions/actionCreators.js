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

export function resetPlayers () {
  return {
    type: 'RESET_PLAYERS'
  };
}

export function receiveCategories (categories) {
  return {
    type: 'RECEIVE_CATEGORIES',
    categories
  };
}

export function isFetchingCategories () {
  return {
    type: 'FETCHING_CATEGORIES'
  };
}

export function fetchCategories () {
  return {
    type: 'FETCH_CATEGORIES'
  };
  // NOTE: deploying the fork of jService would cost way too much for this demo project,
  // and the main API does not support the methods we would need to grab game data efficiently
  // leaving the thunk code here for reference =^.^=

  // return function (dispatch) {
  //   dispatch(isFetchingCategories());
  //   return fetch(process.env.API_URL)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       dispatch(receiveCategories(json));
  //       dispatch(push('./game'));
  //       // TODO: handle errors here! probably just display a message to try re-fetching
  //     });
  // };
}

