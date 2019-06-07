import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NicotinesListItem from './nicotines-list-item.component'

Enzyme.configure({ adapter: new Adapter() })

describe('NicotinesListItem', () => {
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
})
