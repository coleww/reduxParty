require('testdom')('<html><body></body></html>')
import expect from 'expect'
import React from 'react'
import { mount, shallow } from 'enzyme'
import Host from '../../client/components/Host'

function setup(opts) {
  const props = {
    location: {
      query: opts.query || {}
    }
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
      console.log(link)
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

  })
})
