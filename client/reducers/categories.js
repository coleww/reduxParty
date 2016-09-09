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

    case 'RECEIVE_CATEGORIES':
      return action.categories.map((category) => {
        const sortedClues = category.clues.sort((clueA, clueB) => {
          if (clueA.value < clueB.value) {
            return -1;
          } else if (clueA.value > clueB.value) {
            return 1;
          } else {
            return 0;
          }
        });
        const standardizedClues = sortedClues.map((clue, i) => {
          return {
            ...clue,
            value: (i + 1) * 200
          };
        });
        return {
          ...category,
          clues: standardizedClues
        };
      });
    default:
      return state;
  }
}

export default categories;
