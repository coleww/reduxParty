// reducer accepts an action and the current state of the app
// the reducer determines how that action updates the state (WITHOUT MUTATING EVER NO MUTATIONS NO NO NO)

function categories (state = [], action) {
  switch (action.type) {
    case 'ANSWER_CLUE':
      const categoryIndex = action.categoryIndex
      const category = state[categoryIndex]
      const clueIndex = action.clueIndex
      const clue = category.clues[clueIndex]
      const updatedClues = [
        ...category.clues.slice(0, clueIndex),
        {...clue, answered: true},
        ...category.clues.slice(clueIndex + 1)
      ]
      return [
        ...state.slice(0, categoryIndex),
        {...category, clues: updatedClues},
        ...state.slice(categoryIndex + 1)
      ]
    default:
      return state
  }
}

export default categories;
