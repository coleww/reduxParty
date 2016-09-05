
// reducer for editing a single player, action has playerId on it
function updatePlayer (state = [], action) {
  const i = state.findIndex((player) => player.id === action.playerId)
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
    case 'INCREMENT_SCORE':
      const incrementedState = [
        ...state.slice(0, i),
        {...player, score: player.score + action.amount},
        ...state.slice(i + 1)
      ]
      // a player answered correctly, round is over, deactivate all scorekeepers
      // TODO: should this just run updatePlayers with a DEACTIVATE_PLAYERS action?
      return incrementedState.map((player) => {
        return {...player, active: false}
      })
    case 'DECREMENT_SCORE':
      return [
        ...state.slice(0, i),
        {...player, score: player.score - action.amount, active: false},
        ...state.slice(i + 1)
      ]
    default:
      return state
  }
}

// reducer for updating all player state, adding players, etc.
function updatePlayers (state = [], action) {
  switch (action.type) {
    case 'ACTIVATE_PLAYERS':
      return state.map((player) => {
                        return {...player, active: true}})
    default:
      return state
  }
}

function players (state = [], action) {
  if (action.playerId) {
    return updatePlayer(state, action)
  } else {
    return updatePlayers(state, action)
  }

}

export default players;
