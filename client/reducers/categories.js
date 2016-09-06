// reducer accepts an action and the current state of the app
// the reducer determines how that action updates the state (WITHOUT MUTATING EVER NO MUTATIONS NO NO NO)

function categories (state = [], action) {
  switch (action.type) {
    case 'ANSWER_CLUE':
      const categoryIdx = action.categoryIdx;
      const category = state[categoryIdx];
      const clueIdx = action.clueIdx;
      const clue = category.clues[clueIdx];

      // TODO: use reducer composition here to handle updating a clues array
      const updatedClues = [
        ...category.clues.slice(0, clueIdx),
        {...clue, answered: true},
        ...category.clues.slice(clueIdx + 1)
      ];
      return [
        ...state.slice(0, categoryIdx),
        {...category, clues: updatedClues},
        ...state.slice(categoryIdx + 1)
      ];
    default:
      return state;
  }
}

export default categories;
