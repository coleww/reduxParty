// reducer accepts an action and the current state of the app
// the reducer determines how that action updates the state (WITHOUT MUTATING EVER NO MUTATIONS NO NO NO)


// i am not sure that we will need an answers reducer once this is hooked up to an API,
// but adding it for now so that these puppies make it to the store and the error goes away >_<
function answers (state = [], action) {
  console.log(state, action);

  return state;
}

export default answers;
