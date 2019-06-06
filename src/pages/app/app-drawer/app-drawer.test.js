import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import AppDrawer from './app-drawer.component'

Enzyme.configure({ adapter: new Adapter() })

describe('AppDrawer component', () => {
  it('renders without crashing', () => {
    shallow(<AppDrawer />)
  })
})
