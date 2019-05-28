import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import configureStore from 'redux-mock-store'

import SignIn from './'

Enzyme.configure({ adapter: new Adapter() })

const mockStore = configureStore()

describe('Sign In page', () => {
  it('renders without crashing', () => {
    const store = mockStore({ user: null })

    shallow(<SignIn store={store} />)
  })
})
