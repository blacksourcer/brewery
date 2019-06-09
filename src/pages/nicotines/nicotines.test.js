import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Nicotines from './nicotines.component'

Enzyme.configure({ adapter: new Adapter() })

describe('Nicotines page', () => {
  it('renders without crashing', () => {
    const items = [
      { id: 'a1', name: 'Generic nicotine', pg: 100, strength: 20 },
      { id: 'a2', name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }
    ]

    shallow(<Nicotines items={items} />)
  })

  // it('raises onLoad', () => {
  //   const onLoadMock = jest.fn()

  //   shallow(<Nicotines onLoad={onLoadMock} />)

  //   expect(onLoadMock).toHaveBeenCalled()
  // })

  it('raises onCreate', () => {
    const onCreateMock = jest.fn()

    const wrapper = shallow(<Nicotines onCreate={onCreateMock} />)

    wrapper.find('[data-test-id="nicotines_nicotines-form"]').simulate('submit', {
      name: 'Generic nicotine',
      pg: 50,
      strength: 20
    })

    expect(onCreateMock).toHaveBeenCalledWith({
      name: 'Generic nicotine',
      pg: 50,
      strength: 20
    })
  })

  it('raises onUpdate', () => {
    const onUpdateMock = jest.fn()

    const wrapper = shallow(<Nicotines onUpdate={onUpdateMock} />)

    wrapper.find('[data-test-id="nicotines_nicotines-form"]').simulate('submit', {
      id: 'a1',
      name: 'Generic nicotine',
      pg: 50,
      strength: 20
    })

    expect(onUpdateMock).toHaveBeenCalledWith({
      id: 'a1',
      name: 'Generic nicotine',
      pg: 50,
      strength: 20
    })
  })
})
