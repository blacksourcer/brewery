import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NicotinesListItem from './nicotines-list-item.component'

Enzyme.configure({ adapter: new Adapter() })

describe('NicotinesListItem component', () => {
  it('renders without crashing', () => {
    const item = {
      id: 'a1',
      name: 'Generic nicotine',
      pg: 100,
      strength: 20
    }

    shallow(<NicotinesListItem item={item} />)
  })

  it('renders without crashing when a nicotine has notes', () => {
    const item = {
      id: 'a1',
      name: 'Salt nicotine',
      pg: 100,
      strength: 72,
      notes: 'Some notes'
    }

    shallow(<NicotinesListItem item={item} />)
  })

  it('raises onUpdate', () => {
    const onUpdateMock = jest.fn()

    const item = {
      id: 'a1',
      name: 'Salt nicotine',
      pg: 100,
      strength: 72,
      notes: 'Some notes'
    }

    const wrapper = shallow(
      <NicotinesListItem item={item} onUpdate={onUpdateMock} />
    )

    wrapper.find('[data-test-id="nicotines-list-item_button_edit"]').simulate('click')

    expect(onUpdateMock).toHaveBeenCalledWith(item)
  })

  it('raises onDelete', () => {
    const onDeleteMock = jest.fn()

    const item = {
      id: 'a1',
      name: 'Salt nicotine',
      pg: 100,
      strength: 72,
      notes: 'Some notes'
    }

    const wrapper = shallow(
      <NicotinesListItem item={item} onDelete={onDeleteMock} />
    )

    wrapper.find('[data-test-id="nicotines-list-item_button_delete"]').simulate('click')

    expect(onDeleteMock).toHaveBeenCalledWith('a1')
  })
})
