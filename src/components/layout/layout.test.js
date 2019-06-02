import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Layout from './layout.component'

Enzyme.configure({ adapter: new Adapter() })

describe('Layout component', () => {
  it('renders without crashing', () => {
    shallow(
      <Layout>
        <div>Content</div>
      </Layout>
    )
  })

  it('renders without crashing when user is provided', () => {
    const user = {
      id: 's0mes1b0ls',
      email: 'user@domain.com'
    }

    shallow(
      <Layout user={user} >
        <div>Content</div>
      </Layout>
    )
  })

  it('renders without crashing when error is provded', () => {
    const error = { message: 'Error occured' }

    shallow(
      <Layout error={error}>
        <div>Content</div>
      </Layout>
    )
  })

  it('renders without crashing when in loading mode', () => {
    shallow(
      <Layout loading>
        <div>Content</div>
      </Layout>
    )
  })

  it('raises onErrorClose', () => {
    const error = { message: 'Error occured' }
    const onErrorCloseMock = jest.fn()

    const wrapper = shallow(
      <Layout error={error} onErrorClose={onErrorCloseMock}>
        <div>Content</div>
      </Layout>
    )

    wrapper.find('[data-test-id="layout_layout-error"]').simulate('close')

    expect(onErrorCloseMock).toHaveBeenCalled()
  })

  it('raises onSignOutButtonClick', () => {
    const user = {
      id: 's0mes1b0ls',
      email: 'user@domain.com'
    }

    const onSignOutButtonClickMock = jest.fn()

    const wrapper = shallow(
      <Layout user={user} onSignOutButtonClick={onSignOutButtonClickMock}>
        <div>Content</div>
      </Layout>
    )

    wrapper.find('[data-test-id="layout_layout-app-bar"]').simulate('signOutButtonClick')

    expect(onSignOutButtonClickMock).toHaveBeenCalled()
  })
})
