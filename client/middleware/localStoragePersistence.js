export const loadState = function () {
  try {
    const serializedState = localStorage.getItem('APP-STATE')
    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    return undefined;
  }
}

export const saveState = function (state) {
  try {

    const selectedState = {
      categories: state.categories,
      players: state.players,
      gameState: state.gameState
    }
    const serializedState = JSON.stringify(selectedState)
    localStorage.setItem('APP-STATE', serializedState)
  } catch (err) {
    console.error(err)
  }
}