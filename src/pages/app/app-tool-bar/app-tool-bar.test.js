import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import AppToolBar from './app-tool-bar.component'

Enzyme.configure({ adapter: new Adapter() })

describe('AppToolBar component', () => {
  it('renders without crashing', () => {
    shallow(<AppToolBar />)
  })

  it('raises onMenuButtonClick', () => {
    const onMenuButtonClickMock = jest.fn()

    const wrapper = shallow(
      <AppToolBar onMenuButtonClick={onMenuButtonClickMock} />
    )

    wrapper.find('[data-test-id="app-tool-bar_menu-button"]').simulate('click')

    expect(onMenuButtonClickMock).toHaveBeenCalled()
  })

  it('raises onSignOutButtonClick', () => {
    const onSignOutButtonClickMock = jest.fn()

    const wrapper = shallow(
      <AppToolBar onSignOutButtonClick={onSignOutButtonClickMock} />
    )

    wrapper.find('[data-test-id="app-tool-bar_sign-out-button"]').simulate('click')

    expect(onSignOutButtonClickMock).toHaveBeenCalled()
  })
})
