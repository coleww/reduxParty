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
    }
  }

  // NOTE: the mountedWrapper will render out the value,
  // but will fail if we try to click the link because there is no router here.
  // The shallowWrapper only renders a <Link/> for some reason,
  // but does bind the click event.
  // So we are shallow rendering to get JS stuff happening, but full rendering to get simple text displayed,
  // which seems completely counter-intuitive >_<
  // BUT we are only trying to test that the answerClue event fires when clicked,
  // so this seems ok? There must be a better solution for testing react-router stuff,
  // but the internet seems vvv conflicted about it
  const mountedWrapper = mount(<Clue {...props} />)
  const shallowWrapper = shallow(<Clue {...props} />)
  return {
    props,
    mountedWrapper,
    shallowWrapper
  }
}

describe('components', () => {
  describe('Clue', () => {
    it('should render the clue value', () => {
      const { mountedWrapper } = setup({answered: false});
      expect(mountedWrapper.find('.clue-value').text()).toBe('$100');
    })

    it('should call answerClue and activatePlayers when clicked', () => {
      const { props, mountedWrapper } = setup({answered: false});
      mountedWrapper.find('.clue-value').simulate('click');
      expect(props.activatePlayers.calls.length).toBe(1);
      expect(props.answerClue.calls.length).toBe(1);
      expect(props.answerClue.calls[0].arguments.slice(0, 2)).toEqual([1, 0]);
    })

    it('should navigate to the selected clue', () => {
      const { props, mountedWrapper } = setup({answered: false});
      mountedWrapper.find('.clue-value').simulate('click');
      expect(props.router.push.calls.length).toBe(1);
      expect(props.router.push.calls[0].arguments[0]).toBe('game/category/1/clue/0');
    })

    it('should not render a value/link for an answered clue', () => {
      const { mountedWrapper } = setup({answered: true});
      expect(mountedWrapper.find('.clue-value').length).toBe(0);
    })
  })
})
