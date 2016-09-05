import expect from 'expect'
import * as actions from '../client/actions/actionCreators'

describe('actions', () => {
  // TODO: none of the actionCreators in this app are complex enough to merit testing them all
  // leaving these as an example, but it would be better to do the 'action types' business i think?

  it('should create an action to increment a players score', () => {
    const expectedAction = {
      type: 'INCREMENT_SCORE',
      playerId: 1,
      amount: 100
    }
    expect(actions.incrementScore(1, 100)).toEqual(expectedAction)
  })

  it('should create an action to decrement a players score', () => {
    const expectedAction = {
      type: 'DECREMENT_SCORE',
      playerId: 1,
      amount: 100
    }
    expect(actions.decrementScore(1, 100)).toEqual(expectedAction)
  })
})