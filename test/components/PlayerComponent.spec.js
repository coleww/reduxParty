require('testdom')('<html><body></body></html>')
import expect from 'expect'
import React from 'react'
import { mount, shallow } from 'enzyme'
import Player from '../../client/components/Player'

function setup(opts) {
  const props = {
    updateName: expect.createSpy(),
    editName: expect.createSpy(),
    player: {
      id: 1,
      name: 'Player 1',
      editing: opts.editing,
      active: false,
      score: 500
    },
    location: {
      query: {}
    }
  }

  const enzymeWrapper = mount(<Player {...props} />)
  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('Player', () => {
    it('should render the players name', () => {
      const { enzymeWrapper } = setup({editing: false});
      expect(enzymeWrapper.find('.player-score').text()).toBe('$500');
    })

    it('should render the players current score', () => {
      const { enzymeWrapper } = setup({editing: false});
      expect(enzymeWrapper.find('.player-name').text()).toBe('Player 1');
    })

    it('should put player in editing state when their name is clicked', () => {
      const { props, enzymeWrapper } = setup({editing: false});
      const playerName = enzymeWrapper.find('.player-name')
      playerName.simulate('click');
      expect(props.editName.calls.length).toBe(1);
      expect(props.editName.calls[0].arguments[0]).toEqual(1);
    })

    it('should render an input field when player is in editing state', () => {
      const { props, enzymeWrapper } = setup({editing: true});
      const nameInput = enzymeWrapper.find('.player-name-edit');
      expect(nameInput.length).toBe(1);
    })

    it('should fire updateName when player name input is entered', () => {
      const { props, enzymeWrapper } = setup({editing: true});
      const nameInput = enzymeWrapper.find('.player-name-edit');
      nameInput.node.value = 'jojo';
      nameInput.simulate('change', nameInput);
      nameInput.simulate('submit'); // technically it fires on 'enter', but enzyme seems to struggle with simulating keypresses :<
      expect(props.updateName.calls.length).toBe(1);
      expect(props.updateName.calls[0].arguments.slice(0, 2)).toEqual([1, "jojo"]);
    })
  })
})
