import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NicotinesList from './nicotines-list.component'

Enzyme.configure({ adapter: new Adapter() })

describe('NicotinesList', () => {
  it('renders without crashing when no items are provided', () => {
    shallow(<NicotinesList items={[]} />)
  })

  it('renders without crashing when some items are provided', () => {
    const items = [
      { id: 'a1', name: 'Generic nicotine', pg: 100, strength: 20 },
      { id: 'a2', name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }
    ]

    shallow(<NicotinesList items={items} />)
  })
})
