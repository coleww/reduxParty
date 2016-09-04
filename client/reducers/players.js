function players (state = [], action) {
  const i = state.findIndex(player => player.id === action.playerId)
  const player = state[i]
  switch (action.type) {
    case 'EDIT_NAME':
      return [
        ...state.slice(0, i),
        {...player, editing: true},
        ...state.slice(i + 1)
      ]
    case 'UPDATE_NAME':
      return [
        ...state.slice(0, i),
        {...player, editing: false, name: action.newName},
        ...state.slice(i + 1)
      ]
    default:
      return state
  }
}

export default players;
