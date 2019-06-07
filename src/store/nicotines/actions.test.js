import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { nicotines } from '../../services/firebase'

import * as actions from './actions'
import * as appActions from '../app/actions'

const mockStore = configureMockStore([ thunk ])

jest.mock('../../services/firebase')

describe('nicotines mutations', () => {
  it('creates valid SET mutation', () => {
    expect(actions.set([
      { id: 'a1', name: 'Generic nicotine', pg: 100, strength: 20 },
      { id: 'a2', name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }
    ]))
      .toEqual({
        type: actions.SET,
        value: [
          { id: 'a1', name: 'Generic nicotine', pg: 100, strength: 20 },
          { id: 'a2', name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }
        ]
      })
  })

  it('creates valid ADD mutation', () => {
    expect(actions.add(
      { id: 'a1', name: 'Generic nicotine', pg: 100, strength: 20 }
    ))
      .toEqual({
        type: actions.ADD,
        value: { id: 'a1', name: 'Generic nicotine', pg: 100, strength: 20 }
      })
  })

  it('creates valid REMOVE mutation', () => {
    expect(actions.remove('a1'))
      .toEqual({
        type: actions.REMOVE,
        value: 'a1'
      })
  })
})

describe('nicotines fetch action', () => {
  it('sets nicotines when data from the firebase is provided', () => {
    const store = mockStore({ nicotines: [] })

    nicotines.get.mockResolvedValue({
      docs: [
        { id: 'a1', data: () => ({ name: 'Generic nicotine', pg: 100, strength: 20 }) },
        { id: 'a2', data: () => ({ name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }) }
      ]
    })

    store.dispatch(actions.fetch())
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: appActions.SET_LOADING, value: true },
          {
            type: actions.SET,
            value: [
              { id: 'a1', name: 'Generic nicotine', pg: 100, strength: 20 },
              { id: 'a2', name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }
            ]
          },
          { type: appActions.SET_LOADING, value: false }
        ])

        expect(nicotines.get).toHaveBeenCalled()
      })
  })

  it('sets error firebase request fails', () => {
    const store = mockStore({ nicotines: [] })

    nicotines.get.mockRejectedValue({ message: 'error occured' })

    store.dispatch(actions.fetch())
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: appActions.SET_LOADING, value: true },
          { type: appActions.SET_ERROR, value: { message: 'error occured' } },
          { type: appActions.SET_LOADING, value: false }
        ])
      })
  })
})

describe('nicotines create action', () => {
  it('calls firebase method and adds the item to the collection', () => {
    const store = mockStore({ nicotines: [] })

    nicotines.add.mockResolvedValue({ id: 'a1' })

    store.dispatch(actions.create({
      name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes'
    }))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: appActions.SET_LOADING, value: true },
          {
            type: actions.ADD,
            value: { id: 'a1', name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }
          },
          { type: appActions.SET_LOADING, value: false }
        ])

        expect(nicotines.add).toHaveBeenCalledWith({
          name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes'
        })
      })
  })

  it('sets error firebase request fails', () => {
    const store = mockStore({ nicotines: [] })

    nicotines.add.mockRejectedValue({ message: 'error occured' })

    store.dispatch(actions.create({
      name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes'
    }))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: appActions.SET_LOADING, value: true },
          { type: appActions.SET_ERROR, value: { message: 'error occured' } },
          { type: appActions.SET_LOADING, value: false }
        ])
      })
  })
})

describe('nicotines deleteById action', () => {
  it('calls firebase method and deletes the item from the collection', () => {
    const store = mockStore({ nicotines: [
      { id: 'a1', name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }
    ] })

    nicotines.doc = jest.fn(() => ({
      delete: jest.fn().mockResolvedValue()
    }))

    store.dispatch(actions.deleteById('a1'))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: appActions.SET_LOADING, value: true },
          {
            type: actions.DEL,
            value: 'a1'
          },
          { type: appActions.SET_LOADING, value: false }
        ])

        expect(nicotines.doc).toHaveBeenCalledWith('a1')
        expect(nicotines.doc.delete).toHaveBeenCalled()
      })
  })

  it('sets error firebase request fails', () => {
    const store = mockStore({ nicotines: [
      { id: 'a1', name: 'Salt nicotine', pg: 50, strength: 72, notes: 'Some notes' }
    ] })

    nicotines.doc = jest.fn(() => ({
      delete: jest.fn().mockRejectedValue({ message: 'error occured' })
    }))

    store.dispatch(actions.deleteById('a1'))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: appActions.SET_LOADING, value: true },
          { type: appActions.SET_ERROR, value: { message: 'error occured' } },
          { type: appActions.SET_LOADING, value: false }
        ])
      })
  })
})
