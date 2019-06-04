import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Nicotines from './nicotines.component'

Enzyme.configure({ adapter: new Adapter() })

describe('Nicotine page', () => {
  it('renders without crashing', () => {
    shallow(<Nicotines />)
  })
})
