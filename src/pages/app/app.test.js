import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './app.component'

Enzyme.configure({ adapter: new Adapter() })

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })
})
