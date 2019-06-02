import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import LayoutMessage from './layout-message.component'

Enzyme.configure({ adapter: new Adapter() })

describe('LayoutMessage component', () => {
  it('renders without crashing', () => {
    shallow(<LayoutMessage message='test' />)
  })
})
