import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './app.component'

Enzyme.configure({ adapter: new Adapter() })

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })

  it('renders without crashing in initializing state', () => {
    shallow(<App initializing />)
  })

  it('renders without crashing in loading state', () => {
    shallow(<App loading />)
  })

  it('renders without crashing when user is provided', () => {
    const user = {
      id: 's0mes1b0ls',
      email: 'user@domain.com'
    }

    shallow(<App user={user} />)
  })

  it('renders without crashing when error is set', () => {
    const error = { message: 'Error occured' }

    shallow(<App error={error} />)
  })

  it('raises onErrorClose', () => {
    const error = { message: 'Error occured' }
    const onErrorCloseMock = jest.fn()

    const wrapper = shallow(
      <App error={error} onErrorClose={onErrorCloseMock} />
    )

    wrapper.find('[data-test-id="app_error"]').simulate('close')

    expect(onErrorCloseMock).toHaveBeenCalled()
  })

  it('raises onSignOut', () => {
    const user = {
      id: 's0mes1b0ls',
      email: 'user@domain.com'
    }

    const onSignOutMock = jest.fn()

    const wrapper = shallow(
      <App user={user} onSignOut={onSignOutMock} />
    )

    wrapper.find('[data-test-id="app_app-tool-bar"]').simulate('signOut')

    expect(onSignOutMock).toHaveBeenCalled()
  })
})
