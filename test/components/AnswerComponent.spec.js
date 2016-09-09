require('testdom')('<html><body></body></html>')
import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import Answer from '../../client/components/Answer'

function setup(opts) {
  const props = {
    params: {
      categoryIdx: 0,
      clueIdx: 0
    },
    categories: [
      {
        title: 'testing stuff!',
        clues: [
          {
            question: 'does this test pass?',
            answer: 'i sure hope so!',
            value: 1000
          }
        ]
      }
    ],
    location: {
      query: opts.query || {}
    }
  }

  const enzymeWrapper = mount(<Answer {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Answer', () => {
    it('should render out a clue', () => {
      const { enzymeWrapper } = setup({});

      expect(enzymeWrapper.find('.clue-question').text()).toBe('Q: does this test pass?');

      expect(enzymeWrapper.find('.clue-answer').text()).toBe('A: What is i sure hope so!');

    })

    it('should render the question but not the answer when on a display route', () => {
      const { enzymeWrapper } = setup({
        query: {
          display: true
        }
      });

      expect(enzymeWrapper.find('.clue-question').text()).toBe('Q: does this test pass?');

      expect(enzymeWrapper.find('.clue-answer').length).toBe(0);

    })
  })
})
