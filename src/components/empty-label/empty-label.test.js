import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import EmptyLabel from './empty-label.component'

Enzyme.configure({ adapter: new Adapter() })

describe('EmptyLabel component', () => {
  it('renders without crashing', () => {
    shallow(<EmptyLabel>Test</EmptyLabel>)
  })
})
