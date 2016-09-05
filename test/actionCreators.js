import expect from 'expect'
import * as actions from '../client/actions/actionCreators'

describe('actions', () => {
  it('should create an action to increment a players score', () => {
    const expectedAction = {
      type: 'INCREMENT_SCORE',
      playerId: 1,
      amount: 100
    }
    expect(actions.incrementScore(1, 100)).toEqual(expectedAction)
  })
})