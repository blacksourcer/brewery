import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Loader from './loader.component'

Enzyme.configure({ adapter: new Adapter() })

describe('Layout component', () => {
  it('renders without crashing', () => {
    shallow(
      <Loader />
    )
  })
})
