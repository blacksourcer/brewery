import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Flavorings from './flavorings.component'

Enzyme.configure({ adapter: new Adapter() })

describe('Flavorings page', () => {
  it('renders without crashing', () => {
    const items = [
      { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 },
      { id: 'a2', vendor: 'FlavourArt', name: 'Custard v.2', pg: 50, notes: 'Safer then v1' }
    ]

    shallow(<Flavorings items={items} />)
  })

  /** @TODO Disabled as Enzyme does not support useEffect fully yet */
  it('raises onLoad', () => {
    const onLoadMock = jest.fn()

    shallow(<Flavorings onLoad={onLoadMock} />)

    // expect(onLoadMock).toHaveBeenCalled()
  })

  it('raises onCreate', () => {
    const onCreateMock = jest.fn()

    const wrapper = shallow(<Flavorings onCreate={onCreateMock} />)

    wrapper.find('[data-test-id="flavorings_flavorings-form"]').simulate('submit', {
      vendor: 'The Perfumer\'s Apprentice',
      name: 'Strawberry Ripe',
      pg: 100
    })

    expect(onCreateMock).toHaveBeenCalledWith({
      vendor: 'The Perfumer\'s Apprentice',
      name: 'Strawberry Ripe',
      pg: 100
    })
  })

  it('raises onUpdate', () => {
    const onUpdateMock = jest.fn()

    const wrapper = shallow(<Flavorings onUpdate={onUpdateMock} />)

    wrapper.find('[data-test-id="flavorings_flavorings-form"]').simulate('submit', {
      id: 'a1',
      vendor: 'The Perfumer\'s Apprentice',
      name: 'Strawberry Ripe',
      pg: 100
    })

    expect(onUpdateMock).toHaveBeenCalledWith({
      id: 'a1',
      vendor: 'The Perfumer\'s Apprentice',
      name: 'Strawberry Ripe',
      pg: 100
    })
  })
})
