import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import FlavoringsForm from './flavorings-form.component'

Enzyme.configure({ adapter: new Adapter() })

describe('FlavoringsForm component', () => {
  it('renders without crashing', () => {
    const item = {
      vendor: 'The Perfumer\'s Apprentice',
      name: 'Strawberry Ripe',
      pg: 100
    }

    shallow(<FlavoringsForm item={item} />)
  })

  it('renders without crashing when an item with notes provided', () => {
    const item = {
      id: 'a1',
      vendor: 'The Perfumer\'s Apprentice',
      name: 'Strawberry Ripe',
      pg: 100,
      notes: 'Some notes'
    }

    shallow(<FlavoringsForm item={item} />)
  })

  it('raises onSubmit', () => {
    const item = {
      vendor: '',
      name: '',
      pg: 100
    }

    const onSubmitMock = jest.fn()

    const wrapper = shallow(
      <FlavoringsForm item={item} onSubmit={onSubmitMock} />
    )

    wrapper.find('[data-test-id="flavorings-form_text-field_vendor"]').simulate('change', {
      target: {
        name: 'name',
        value: 'The Perfumer\'s Apprentice'
      }
    })

    wrapper.find('[data-test-id="flavorings-form_text-field_name"]').simulate('change', {
      target: {
        name: 'name',
        value: 'Strawberry Ripe'
      }
    })

    wrapper.find('[data-test-id="flavorings-form_text-field_pg"]').simulate('change', {
      target: {
        name: 'pg',
        value: '50',
        type: 'number'
      }
    })

    wrapper.find('[data-test-id="flavorings-form_form"]').simulate('submit', {
      preventDefault: () => {}
    })

    expect(onSubmitMock).toHaveBeenCalledWith({
      vendor: 'The Perfumer\'s Apprentice',
      name: 'Strawberry Ripe',
      pg: 50,
      notes: ''
    })
  })

  it('does not raise onSubmit vendor is not valid', () => {
    const item = {
      vendor: 'The Perfumer\'s Apprentice',
      name: 'Strawberry Ripe',
      pg: 100
    }

    const onSubmitMock = jest.fn()

    const wrapper = shallow(
      <FlavoringsForm item={item} onSubmit={onSubmitMock} />
    )

    wrapper.find('[data-test-id="flavorings-form_text-field_vendor"]').simulate('change', {
      target: {
        name: 'name',
        value: ''
      }
    })

    wrapper.find('[data-test-id="flavorings-form_form"]').simulate('submit', {
      preventDefault: () => {}
    })

    expect(onSubmitMock).not.toHaveBeenCalled()
  })

  it('does not raise onSubmit name is not valid', () => {
    const item = {
      vendor: 'The Perfumer\'s Apprentice',
      name: 'Strawberry Ripe',
      pg: 100
    }

    const onSubmitMock = jest.fn()

    const wrapper = shallow(
      <FlavoringsForm item={item} onSubmit={onSubmitMock} />
    )

    wrapper.find('[data-test-id="flavorings-form_text-field_name"]').simulate('change', {
      target: {
        name: 'name',
        value: ''
      }
    })

    wrapper.find('[data-test-id="flavorings-form_form"]').simulate('submit', {
      preventDefault: () => {}
    })

    expect(onSubmitMock).not.toHaveBeenCalled()
  })
})
