import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Nicotines from './nicotines.component'

Enzyme.configure({ adapter: new Adapter() })

describe('Nicotines page', () => {
  it('renders without crashing', () => {
    const items = [
      { id: 'a1', name: 'Generic nicotine', pg: 100, strength: 20 },
      { id: 'a2', name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }
    ]

    shallow(<Nicotines items={items} />)
  })
})
