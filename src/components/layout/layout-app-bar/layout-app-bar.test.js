import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import LayoutAppBar from './layout-app-bar.component'

Enzyme.configure({ adapter: new Adapter() })

describe('LayoutAppBar component', () => {
  it('renders without crashing', () => {
    shallow(<LayoutAppBar />)
  })

  it('raises onMenuButtonClick', () => {
    const onMenuButtonClickMock = jest.fn()

    const wrapper = shallow(
      <LayoutAppBar onMenuButtonClick={onMenuButtonClickMock} />
    )

    wrapper.find('[data-test-id="layout-app-bar_menu-button"]').simulate('click')

    expect(onMenuButtonClickMock).toHaveBeenCalled()
  })

  it('raises onSignOutButtonClick', () => {
    const onSignOutButtonClickMock = jest.fn()

    const wrapper = shallow(
      <LayoutAppBar onSignOutButtonClick={onSignOutButtonClickMock} />
    )

    wrapper.find('[data-test-id="layout-app-bar_sign-out-button"]').simulate('click')

    expect(onSignOutButtonClickMock).toHaveBeenCalled()
  })
})
