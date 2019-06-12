import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import FlavoringsListItem from './flavorings-list-item.component'

Enzyme.configure({ adapter: new Adapter() })

describe('FlavoringsListItem component', () => {
  it('renders without crashing', () => {
    const item = {
      id: 'a1',
      vendor: 'The Perfumer\'s Apprentice',
      name: 'Strawberry Ripe',
      pg: 100
    }

    shallow(<FlavoringsListItem item={item} />)
  })

  it('renders without crashing when a flavoring has notes', () => {
    const item = {
      id: 'a1',
      vendor: 'The Perfumer\'s Apprentice',
      name: 'Strawberry Ripe',
      pg: 100,
      notes: 'Some notes'
    }

    shallow(<FlavoringsListItem item={item} />)
  })

  it('raises onUpdate', () => {
    const onUpdateMock = jest.fn()

    const item = {
      id: 'a1',
      vendor: 'The Perfumer\'s Apprentice',
      name: 'Strawberry Ripe',
      pg: 100,
      notes: 'Some notes'
    }

    const wrapper = shallow(
      <FlavoringsListItem item={item} onUpdate={onUpdateMock} />
    )

    wrapper.find('[data-test-id="flavorings-list-item_button_edit"]').simulate('click')

    expect(onUpdateMock).toHaveBeenCalledWith(item)
  })

  it('raises onDelete', () => {
    const onDeleteMock = jest.fn()

    const item = {
      id: 'a1',
      vendor: 'The Perfumer\'s Apprentice',
      name: 'Strawberry Ripe',
      pg: 100,
      notes: 'Some notes'
    }

    const wrapper = shallow(
      <FlavoringsListItem item={item} onDelete={onDeleteMock} />
    )

    wrapper.find('[data-test-id="flavorings-list-item_button_delete"]').simulate('click')

    expect(onDeleteMock).toHaveBeenCalledWith('a1')
  })
})
