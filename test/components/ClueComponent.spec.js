require('testdom')('<html><body></body></html>')
import expect from 'expect'
import React from 'react'
import { mount, shallow } from 'enzyme'
import Clue from '../../client/components/Clue'


function setup(opts) {
  const props = {
    categoryIndex: 1,
    clueIndex: 0,
    answerClue: expect.createSpy(),
    activatePlayers: expect.createSpy(),
    clue: {
      answered: opts.answered,
      value: 100
    },
    location: {
      query: {}
    },
    router: {
      push: expect.createSpy()
    },
    location: {
      query: opts.query || {}
    }
  }

  const enzymeWrapper = mount(<Clue {...props} />)
  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Clue', () => {
    it('should render the clue value', () => {
      const { enzymeWrapper } = setup({answered: false});
      expect(enzymeWrapper.find('.clue-value').text()).toBe('$100');
    })

    it('should call answerClue and activatePlayers when clicked', () => {
      const { props, enzymeWrapper } = setup({answered: false});
      enzymeWrapper.find('.clue-value').simulate('click');
      expect(props.activatePlayers.calls.length).toBe(1);
      expect(props.answerClue.calls.length).toBe(1);
      expect(props.answerClue.calls[0].arguments.slice(0, 2)).toEqual([1, 0]);
    })

    it('should navigate to the selected clue when clicked', () => {
      const { props, enzymeWrapper } = setup({answered: false});
      enzymeWrapper.find('.clue-value').simulate('click');
      expect(props.router.push.calls.length).toBe(1);
      expect(props.router.push.calls[0].arguments[0]).toBe('game/category/1/clue/0');
    })

    it('should do nothing when selected clue is clicked on a display router', () => {
      const { props, enzymeWrapper } = setup({answered: false, query: {display: true}});
      enzymeWrapper.find('.clue-value').simulate('click');
      expect(props.router.push.calls.length).toBe(0);
      expect(props.activatePlayers.calls.length).toBe(0);
      expect(props.answerClue.calls.length).toBe(0);
    })

    it('should not render a value/link for an answered clue', () => {
      const { enzymeWrapper } = setup({answered: true});
      expect(enzymeWrapper.find('.clue-value').length).toBe(0);
    })
  })
})
