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

export function editName (playerId) {
  return {
    type: 'EDIT_NAME',
    playerId
  }
}

export function updateName (playerId, newName) {
  return {
    type: 'UPDATE_NAME',
    playerId,
    newName
  }
}

export function answerClue (categoryIndex, clueIndex) {
  return {
    type: 'ANSWER_CLUE',
    categoryIndex,
    clueIndex
  }
}

