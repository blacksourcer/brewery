import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import AppToolBar from './app-tool-bar.component'

Enzyme.configure({ adapter: new Adapter() })

describe('AppToolBar component', () => {
  it('renders without crashing', () => {
    shallow(<AppToolBar />)
  })

  it('raises onMenu', () => {
    const onMenuMock = jest.fn()

    const wrapper = shallow(
      <AppToolBar onMenu={onMenuMock} />
    )

    wrapper.find('[data-test-id="app-tool-bar_menu-button"]').simulate('click')

    expect(onMenuMock).toHaveBeenCalled()
  })

  it('raises onSignOut', () => {
    const onSignOutMock = jest.fn()

    const wrapper = shallow(
      <AppToolBar onSignOut={onSignOutMock} />
    )

    wrapper.find('[data-test-id="app-tool-bar_sign-out-button"]').simulate('click')

    expect(onSignOutMock).toHaveBeenCalled()
  })
})
