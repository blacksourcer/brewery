import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import LayoutDrawer from './layout-drawer.component'

Enzyme.configure({ adapter: new Adapter() })

describe('LayoutDrawer component', () => {
  it('renders without crashing', () => {
    shallow(<LayoutDrawer />)
  })
})
