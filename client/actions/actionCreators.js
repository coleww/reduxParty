// react-router-redux will handle things like switching from the game board to an answer

// if a player answers the answer
export function increment (playerId, amount) {
  return {
    type: 'INCREMENT_WINNINGS',
    playerId,
    amount
  }
}

export function decrement (playerId, amount) {
  return {
    type: 'DECREMENT_WINNINGS',
    playerId,
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

