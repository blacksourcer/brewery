import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'

import Home from './';

Enzyme.configure({ adapter: new Adapter() })

const mockStore = configureStore()

describe('Home page', () => {
  it('renders without crashing', () => {
    const store = mockStore({ user: null })

    shallow(<Home store={store} />);
  })
})
