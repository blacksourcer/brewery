import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import LayoutError from './layout-error.component'

Enzyme.configure({ adapter: new Adapter() })

describe('LayoutError component', () => {
  it('renders without crashing', () => {
    shallow(<LayoutError message='test' />)
  })

  it('raises onClose', () => {
    const onCloseMock = jest.fn()

    const wrapper = shallow(
      <LayoutError message='test' onClose={onCloseMock} />
    )

    wrapper.find('[data-test-id="layout-error_snackbar"]').simulate('close')

    expect(onCloseMock).toHaveBeenCalled()
  })
})
