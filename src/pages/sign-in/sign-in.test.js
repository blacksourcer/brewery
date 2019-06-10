import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import SignIn from './sign-in.component'

Enzyme.configure({ adapter: new Adapter() })

describe('SignIn page', () => {
  it('renders without crashing', () => {
    shallow(<SignIn />)
  })

  it('raises onSubmit', () => {
    const onSubmitMock = jest.fn()

    const wrapper = shallow(
      <SignIn onSubmit={onSubmitMock} />
    )

    wrapper.find('[data-test-id="sign-in_text-field_email"]').simulate('change', {
      target: {
        name: 'email',
        value: 'user@domain.com'
      }
    })

    wrapper.find('[data-test-id="sign-in_text-field_password"]').simulate('change', {
      target: {
        name: 'password',
        value: 'secret'
      }
    })

    wrapper.find('[data-test-id="sign-in_form"]').simulate('submit', {
      preventDefault: () => {}
    })

    expect(onSubmitMock).toHaveBeenCalledWith('user@domain.com', 'secret')
  })
})
