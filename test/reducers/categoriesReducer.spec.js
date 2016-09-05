import expect from 'expect'
import reducer from '../../client/reducers/categories'

const initialState = [
  {
    title: 'foo',
    clues: [
      {
        question: 'what',
        answer: 'huh',
        amount: 100,
        answered: false
      },
      {
        question: 'ok',
        answer: 'cool',
        amount: 1000,
        answered: false
      }
    ]
  }
]

describe('categories reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })

  it('should mark a clue as answered', () => {
    expect(
      reducer(initialState, {
        type: 'ANSWER_CLUE',
        categoryIdx: 0,
        clueIdx: 1
      })
    ).toEqual([  {
    title: 'foo',
    clues: [
        {
          question: 'what',
          answer: 'huh',
          amount: 100,
          answered: false
        },
        {
          question: 'ok',
          answer: 'cool',
          amount: 1000,
          answered: true
        }
      ]
    }])
  })
})
