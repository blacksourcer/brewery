import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { flavorings } from '../../services/firebase'

import * as actions from './actions'
import * as appActions from '../app/actions'

const mockStore = configureMockStore([ thunk ])

jest.mock('../../services/firebase')

describe('flavorings mutations', () => {
  it('creates valid SET mutation', () => {
    expect(actions.set([
      { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 },
      { id: 'a2', vendor: 'FlavourArt', name: 'Custard v.2', pg: 50, notes: 'Safer then v1' }
    ]))
      .toEqual({
        type: actions.SET,
        value: [
          { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 },
          { id: 'a2', vendor: 'FlavourArt', name: 'Custard v.2', pg: 50, notes: 'Safer then v1' }
        ]
      })
  })

  it('creates valid ADD mutation', () => {
    expect(actions.add(
      { vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 }
    ))
      .toEqual({
        type: actions.ADD,
        value: { vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 }
      })
  })

  it('creates valid EDIT mutation', () => {
    expect(actions.edit(
      { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 }
    ))
      .toEqual({
        type: actions.EDIT,
        value: { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 }
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

describe('flavorings fetch action', () => {
  it('sets flavorings when data from the firebase is provided', () => {
    const store = mockStore({ flavorings: [] })

    flavorings.get.mockResolvedValue({
      docs: [
        { id: 'a1', data: () => ({ vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 }) },
        { id: 'a2', data: () => ({ vendor: 'FlavourArt', name: 'Custard v.2', pg: 50, notes: 'Safer then v1' }) }
      ]
    })

    store.dispatch(actions.fetch())
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: appActions.SET_LOADING, value: true },
          {
            type: actions.SET,
            value: [
              { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 },
              { id: 'a2', vendor: 'FlavourArt', name: 'Custard v.2', pg: 50, notes: 'Safer then v1' }
            ]
          },
          { type: appActions.SET_LOADING, value: false }
        ])

        expect(flavorings.get).toHaveBeenCalled()
      })
  })

  it('sets error firebase request fails', () => {
    const store = mockStore({ flavorings: [] })

    flavorings.get.mockRejectedValue({ message: 'error occured' })

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

describe('flavorings create action', () => {
  it('calls firebase method and adds the item to the collection', () => {
    const store = mockStore({ flavorings: [] })

    flavorings.add.mockResolvedValue({
      id: 'a1',
      data: () => ({ vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 })
    })

    store.dispatch(actions.create(
      { vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 }
    ))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: appActions.SET_LOADING, value: true },
          {
            type: actions.ADD,
            value: { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 }
          },
          { type: appActions.SET_LOADING, value: false }
        ])

        expect(flavorings.add).toHaveBeenCalledWith(
          { vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 })
      })
  })

  it('sets error firebase request fails', () => {
    const store = mockStore({ flavorings: [] })

    flavorings.add.mockRejectedValue({ message: 'error occured' })

    store.dispatch(actions.create(
      { vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 }
    ))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: appActions.SET_LOADING, value: true },
          { type: appActions.SET_ERROR, value: { message: 'error occured' } },
          { type: appActions.SET_LOADING, value: false }
        ])
      })
  })
})

describe('flavorings update action', () => {
  it('calls firebase method and edits the item in the collection', () => {
    const store = mockStore({ flavorings: [
      { id: 'a1', vendor: 'The Parumer Apprentice', name: 'Straberry Ripe', pg: 50 }
    ] })

    const mockUpdate = jest.fn()

    flavorings.doc = jest.fn(() => ({ update: mockUpdate }))

    mockUpdate.mockResolvedValue()

    store.dispatch(actions.update(
      { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 }
    ))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: appActions.SET_LOADING, value: true },
          {
            type: actions.EDIT,
            value: { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 }
          },
          { type: appActions.SET_LOADING, value: false }
        ])

        expect(flavorings.doc).toHaveBeenCalledWith('a1')
        expect(mockUpdate).toHaveBeenCalledWith(
          { vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 }
        )
      })
  })

  it('sets error firebase request fails', () => {
    const store = mockStore({ flavorings: [
      { id: 'a1', vendor: 'The Parumer Apprentice', name: 'Straberry Ripe', pg: 50 }
    ] })

    const mockUpdate = jest.fn()

    flavorings.doc = jest.fn(() => ({ update: mockUpdate }))

    mockUpdate.mockRejectedValue({ message: 'error occured' })

    store.dispatch(actions.update(
      { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 }
    ))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: appActions.SET_LOADING, value: true },
          { type: appActions.SET_ERROR, value: { message: 'error occured' } },
          { type: appActions.SET_LOADING, value: false }
        ])
      })
  })
})

describe('flavorings deleteById action', () => {
  it('calls firebase method and deletes the item from the collection', () => {
    const store = mockStore({ flavorings: [
      { id: 'a1', vendor: 'The Perfumer\'s Apprentice', name: 'Strawberry Ripe', pg: 100 }
    ] })

    const mockDelete = jest.fn()

    flavorings.doc = jest.fn(() => ({ delete: mockDelete }))

    mockDelete.mockResolvedValue()

    store.dispatch(actions.deleteById('a1'))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: appActions.SET_LOADING, value: true },
          { type: actions.REMOVE, value: 'a1' },
          { type: appActions.SET_LOADING, value: false }
        ])

        expect(flavorings.doc).toHaveBeenCalledWith('a1')
        expect(mockDelete).toHaveBeenCalled()
      })
  })

  it('sets error firebase request fails', () => {
    const store = mockStore({ flavorings: [
      { id: 'a1', vendor: 'The Parumer Apprentice', name: 'Straberry Ripe', pg: 50 }
    ] })

    const mockDelete = jest.fn()

    flavorings.doc = jest.fn(() => ({ delete: mockDelete }))

    mockDelete.mockRejectedValue({ message: 'error occured' })

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
