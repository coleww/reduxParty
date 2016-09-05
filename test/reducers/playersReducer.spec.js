import expect from 'expect'
import reducer from '../../client/reducers/players'

const initialState = [
  {
    id: 1,
    name: 'Reggie',
    active: false,
    editing: false,
    score: 0
  },
  {
    id: 2,
    name: 'Nancy',
    active: false,
    editing: false,
    score: 0
  }
]

const initialActiveState = initialState.map((player) => {
  return {...player, active: true}
})

const initialEditingState = initialState.map((player) => {
  return {...player, editing: true}
})

describe('players reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })

  it('should mark all players as active', () => {
    expect(
      reducer(initialState, {
        type: 'ACTIVATE_PLAYERS'
      })
    ).toEqual([
      {
        id: 1,
        name: 'Reggie',
        active: true,
        editing: false,
        score: 0
      },
      {
        id: 2,
        name: 'Nancy',
        active: true,
        editing: false,
        score: 0
      }
    ])
  })

  it('should mark all players as inactive', () => {
    expect(
      reducer(initialActiveState, {
        type: 'DEACTIVATE_PLAYERS'
      })
    ).toEqual([
      {
        id: 1,
        name: 'Reggie',
        active: false,
        editing: false,
        score: 0
      },
      {
        id: 2,
        name: 'Nancy',
        active: false,
        editing: false,
        score: 0
      }
    ])
  })

  it('should mark a single player in the editing state', () => {
    expect(
      reducer(initialState, {
        type: 'EDIT_NAME',
        playerId: 1
      })
    ).toEqual([
      {
        id: 1,
        name: 'Reggie',
        active: false,
        editing: true,
        score: 0
      },
      {
        id: 2,
        name: 'Nancy',
        active: false,
        editing: false,
        score: 0
      }
    ])
  })

  it('should update a players name', () => {
    expect(
      reducer(initialEditingState, {
        type: 'UPDATE_NAME',
        playerId: 1,
        newName: 'Reginald'
      })
    ).toEqual([
      {
        id: 1,
        name: 'Reginald',
        active: false,
        editing: false,
        score: 0
      },
      {
        id: 2,
        name: 'Nancy',
        active: false,
        editing: true,
        score: 0
      }
    ])
  })

  it('should update a players name', () => {
    expect(
      reducer(initialEditingState, {
        type: 'UPDATE_NAME',
        playerId: 1,
        newName: 'Reginald'
      })
    ).toEqual([
      {
        id: 1,
        name: 'Reginald',
        active: false,
        editing: false,
        score: 0
      },
      {
        id: 2,
        name: 'Nancy',
        active: false,
        editing: true,
        score: 0
      }
    ])
  })

  it('should decrement a players score and mark them as inactive', () => {
    expect(
      reducer(initialActiveState, {
        type: 'DECREMENT_SCORE',
        playerId: 1,
        amount: 100
      })
    ).toEqual([
      {
        id: 1,
        name: 'Reggie',
        active: false,
        editing: false,
        score: -100
      },
      {
        id: 2,
        name: 'Nancy',
        active: true,
        editing: false,
        score: 0
      }
    ])
  })

  it('should increment a players score and mark all players as inactive', () => {
    expect(
      reducer(initialActiveState, {
        type: 'INCREMENT_SCORE',
        playerId: 1,
        amount: 100
      })
    ).toEqual([
      {
        id: 1,
        name: 'Reggie',
        active: false,
        editing: false,
        score: 100
      },
      {
        id: 2,
        name: 'Nancy',
        active: false,
        editing: false,
        score: 0
      }
    ])
  })
})
