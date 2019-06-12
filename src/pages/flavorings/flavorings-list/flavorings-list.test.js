import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import FlavoringsList from './flavorings-list.component'

Enzyme.configure({ adapter: new Adapter() })

describe('FlavoringsList component', () => {
  it('renders without crashing when no items are provided', () => {
    shallow(<FlavoringsList items={[]} />)
  })

  it('renders without crashing when some items are provided', () => {
    const items = [
      { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 },
      { id: 'a2', vendor: 'FlavourArt', name: 'Custard v.2', pg: 50, notes: 'Safer then v1' }
    ]

    shallow(<FlavoringsList items={items} />)
  })

  it('raises onUpdate', () => {
    const onUpdateMock = jest.fn()

    const items = [
      { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 },
      { id: 'a2', vendor: 'FlavourArt', name: 'Custard v.2', pg: 50, notes: 'Safer then v1' }
    ]

    const wrapper = shallow(
      <FlavoringsList items={items} onUpdate={onUpdateMock} />
    )

    wrapper.find('[data-test-id="flavorings-list_flavorings-list-item_a2"]').simulate('update')

    expect(onUpdateMock).toHaveBeenCalled()
  })

  it('raises onDelete', () => {
    const onDeleteMock = jest.fn()

    const items = [
      { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 },
      { id: 'a2', vendor: 'FlavourArt', name: 'Custard v.2', pg: 50, notes: 'Safer then v1' }
    ]

    const wrapper = shallow(
      <FlavoringsList items={items} onDelete={onDeleteMock} />
    )

    wrapper.find('[data-test-id="flavorings-list_flavorings-list-item_a2"]').simulate('delete')

    expect(onDeleteMock).toHaveBeenCalled()
  })
})
