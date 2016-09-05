import expect from 'expect'
import reducer from '../client/reducers/categories'

describe('categories reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })
})