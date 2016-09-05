require('testdom')('<html><body></body></html>')
import expect from 'expect'
import React from 'react'
import { shallow, mount } from 'enzyme'
import Answer from '../client/components/Answer'

function setup() {
  const props = {
    activatePlayers: expect.createSpy(),
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
    ]
  }

  const enzymeWrapper = shallow(<Answer {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Answer', () => {
    it('should render out a clue', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.find('.clue-question').text()).toBe('Q: does this test pass?');

      expect(enzymeWrapper.find('.clue-answer').text()).toBe('A: What is i sure hope so!');

    })

    it('should call activatePlayers', () => {
      const { props } = setup();
      mount(<Answer {...props} />)
      expect(props.activatePlayers.calls.length).toBe(1);
    })
  })
})
