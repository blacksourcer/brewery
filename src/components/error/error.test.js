import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Error from './error.component'

Enzyme.configure({ adapter: new Adapter() })

describe('Error component', () => {
  it('renders without crashing', () => {
    shallow(<Error message='test' />)
  })

  it('raises onClose', () => {
    const onCloseMock = jest.fn()

    const wrapper = shallow(
      <Error message='test' onClose={onCloseMock} />
    )

    wrapper.find('[data-test-id="error_snackbar"]').simulate('close')

    expect(onCloseMock).toHaveBeenCalled()
  })
})
