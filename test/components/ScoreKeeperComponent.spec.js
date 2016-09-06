require('testdom')('<html><body></body></html>')
import expect from 'expect'
import React from 'react'
import { mount, shallow } from 'enzyme'
import ScoreKeeper from '../../client/components/ScoreKeeper'

function setup(opts) {
  const props = {
    decrementScore: expect.createSpy(),
    incrementScore: expect.createSpy(),
    params: {
      categoryIdx: 0,
      clueIdx: 0
    },
    player: {
      id: 1
    },
    categories: [
      {
        title: 'foo',
        clues: [
          {
            question: 'question',
            answer: 'answer',
            value: 100
          }
        ]
      }
    ],
    location: {
      query: opts.query || {}
    }
  }

  const enzymeWrapper = mount(<ScoreKeeper {...props} />)
  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('ScoreKeeper', () => {
    it('should render a + button that increments a players score', () => {
      const { props, enzymeWrapper } = setup({});
      const button = enzymeWrapper.find('.player-score-add');
      expect(button.text()).toBe('+');
      button.simulate('click');
      expect(props.incrementScore.calls.length).toBe(1);
      expect(props.incrementScore.calls[0].arguments.slice(0, 2)).toEqual([1, 100]);
    })

    it('should render a - button that decrements a players score', () => {
      const { props, enzymeWrapper } = setup({});
      const button = enzymeWrapper.find('.player-score-subtract');
      expect(button.text()).toBe('-');
      button.simulate('click');
      expect(props.decrementScore.calls.length).toBe(1);
      expect(props.decrementScore.calls[0].arguments.slice(0, 2)).toEqual([1, 100]);
    })

    it('should not render anything if not on an "answer" route', () => {
      const notAnAnswerProps = {
        params: {
          categoryIdx: undefined
        }
      };
      const blankComponent = shallow(<ScoreKeeper {...notAnAnswerProps} />);
      expect(blankComponent.html()).toBe(null);
    })

    it('should not render anything if on a "display" tab', () => {
      const displayTabProps = {
        query: {
          display: true
        }
      };
      const { enzymeWrapper } = setup(displayTabProps);
      expect(enzymeWrapper.html()).toBe(null);
    })
  })
})
