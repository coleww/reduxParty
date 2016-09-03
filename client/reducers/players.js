// reducer accepts an action and the current state of the app
// the reducer determines how that action updates the state (WITHOUT MUTATING EVER NO MUTATIONS NO NO NO)

function players (state = [], action) {
  console.log(state, action);

  return state;
}

export default players;
