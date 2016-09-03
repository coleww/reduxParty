// reducer accepts an action and the current state of the app
// the reducer determines how that action updates the state (WITHOUT MUTATING EVER NO MUTATIONS NO NO NO)

function categories (state = [], action) {
  switch (action.type) {
    case 'ANSWER_CLUE':
      const i = action.categoryIndex
      const category = state[i]
      const updatedClues = category.clues.map((clue) => clue.value === action.answerValue ? {...clue, answered: true} : clue)
      return [
        ...state.slice(0, i),
        {...category, clues: updatedClues},
        ...state.slice(i + 1)
      ]
    default:
      return state
  }

  return state;
}

export default categories;
