// react-router-redux will handle things like switching from the game board to an answer

// if a player answers the answer
export function increment (index, amount) {
  return {
    type: 'INCREMENT_WINNINGS',
    index,
    amount
  }
}

export function decrement (index, amount) {
  return {
    type: 'DECREMENT_WINNINGS',
    index,
    amount
  }
}

export function answerClue (categoryId, answerValue) {
  return {
    type: 'ANSWER_CLUE',
    categoryId,
    answerValue
  }
}

