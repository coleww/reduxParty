require('testdom')('<html><body></body></html>')
import expect from 'expect'
import React from 'react'
import { mount, shallow } from 'enzyme'
import Host from '../../client/components/Host'

function setup(opts) {
  const props = {
    location: {
      query: opts.query || {}
    },
    gameState: {
      fetching: opts.fetching
    },
    fetchCategories: expect.createSpy()
  }

  const enzymeWrapper = mount(<Host {...props} />)
  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Host', () => {
    it('should render a link to a display tab', () => {
      const { props, enzymeWrapper } = setup({});
      const link = enzymeWrapper.find('.host-open-display');
      expect(link.length).toBe(1);
    })

    it('should render nothing if on a display tab', () => {
      const displayTabProps = {
        query: {
          display: true
        }
      };
      const { enzymeWrapper } = setup(displayTabProps);
      expect(enzymeWrapper.html()).toBe(null);
    })

    it('should call fetchCategories when the button is clicked', () => {
      const { props, enzymeWrapper } = setup({});
      const button = enzymeWrapper.find('.fetch-categories');
      expect(button.text()).toBe('Start new round with random categories');
      button.simulate('click');
      expect(props.fetchCategories.calls.length).toBe(1);
    })

    it('should show loading message when fetching data', () => {
      const { enzymeWrapper } = setup({fetching: true});
      const button = enzymeWrapper.find('.fetch-categories');
      expect(button.text()).toBe('Fetching data from the server...');
    })

  })
})
