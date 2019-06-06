import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Message from './message.component'

Enzyme.configure({ adapter: new Adapter() })

describe('Message component', () => {
  it('renders without crashing', () => {
    shallow(<Message message='test' />)
  })
})
