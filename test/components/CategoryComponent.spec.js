require('testdom')('<html><body></body></html>')
import expect from 'expect'
import React from 'react'
import { mount, shallow } from 'enzyme'
import Category from '../../client/components/Category'

function setup() {
  const props = {
    answerClue: () => {},
    category: {
      title: 'test!',
      clues: [
        {
          value: 100
        },
        {
          value: 200
        }
      ]
    },
    location: {
      query: {}
    }
  }

  const enzymeWrapper = shallow(<Category {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Category', () => {
    it('should render the category title', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('.category-title').text()).toBe('test!');
    })

    it('should render its beautiful clue children', () => {
      const { props } = setup();
      const mountedWrapper = mount(<Category {...props} />)
      expect(mountedWrapper.find('.category-clue').length).toBe(2);
    })
  })
})
