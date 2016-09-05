require('testdom')('<html><body></body></html>')
import expect from 'expect'
import React from 'react'
import { mount, shallow } from 'enzyme'
import Clue from '../../client/components/Clue'


function setup(opts) {
  const props = {
    answerClue: expect.createSpy(),
    clue: {
      answered: opts.answered,
      value: 100
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

    // TODO: how the heck do you set up react-router to work in tests?
    it('should call answerClue when clicked', () => {
      const { props, shallowWrapper } = setup({answered: false});
      shallowWrapper.find('.clue-value').simulate('click')
      expect(props.answerClue.calls.length).toBe(1);
    })

    it('should not render a value/link for an answered clue', () => {
      const { shallowWrapper } = setup({answered: true});
      expect(shallowWrapper.find('.clue-value').length).toBe(0);
    })
  })
})
