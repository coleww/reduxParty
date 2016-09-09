// reducer accepts an action and the current state of the app
// the reducer determines how that action updates the state (WITHOUT MUTATING EVER NO MUTATIONS NO NO NO)

function gameState (state = {}, action) {
  switch (action.type) {
    case 'FETCHING_CATEGORIES':
      return {...state, fetching: true};
    case 'RECEIVE_CATEGORIES':
      return {...state, fetching: false};
    default:
      return state;
  }
}

export default gameState;
