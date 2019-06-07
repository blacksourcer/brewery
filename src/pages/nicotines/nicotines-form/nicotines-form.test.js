import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NicotinesForm from './nicotines-form.component'

Enzyme.configure({ adapter: new Adapter() })

describe('NicotinesForm component', () => {
  it('renders without crashing', () => {
    shallow(<NicotinesForm />)
  })

  it('renders without crashing with item provided', () => {
    const item = {
      id: 'a1',
      name: 'Generic nicotine',
      pg: 100,
      strength: 20
    }

    shallow(<NicotinesForm item={item} />)
  })

  it('renders without crashing with item with notes provided', () => {
    const item = {
      id: 'a2',
      name: 'Salt nicotine',
      pg: 100,
      strength: 72,
      notes: 'Some notes'
    }

    shallow(<NicotinesForm item={item} />)
  })

  it('raises onSubmit', () => {
    const onSubmitMock = jest.fn()

    const wrapper = shallow(
      <NicotinesForm onSubmit={onSubmitMock} />
    )

    wrapper.find('[data-test-id="nicotines-form_text-field_name"]').simulate('change', {
      target: {
        name: 'name',
        value: 'Generic nicotine'
      }
    })

    wrapper.find('[data-test-id="nicotines-form_text-field_pg"]').simulate('change', {
      target: {
        name: 'pg',
        value: 100
      }
    })

    wrapper.find('[data-test-id="nicotines-form_text-field_strength"]').simulate('change', {
      target: {
        name: 'strength',
        value: 20
      }
    })

    wrapper.find('[data-test-id="nicotines-form_form"]').simulate('submit', {
      preventDefault: () => {}
    })

    expect(onSubmitMock).toHaveBeenCalledWith({
      name: 'Generic nicotine',
      pg: 100,
      strength: 20
    })
  })
})
