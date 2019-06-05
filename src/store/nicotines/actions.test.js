import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { nicotines } from '../../services/firebase'

import * as actions from './actions'
import * as appActions from '../app/actions'

const mockStore = configureMockStore([ thunk ])

jest.mock('../../services/firebase')

describe('nicotines mutations', () => {
  it('creates valid SET_NICOTINES mutation', () => {
    expect(actions.setNicotines([
      { id: 'a1', name: 'Generic nicotine', pg: 100 },
      { id: 'a2', name: 'Salt nicotine', pg: 50 }
    ]))
      .toEqual({
        type: actions.SET_NICOTINES,
        value: [
          { id: 'a1', name: 'Generic nicotine', pg: 100 },
          { id: 'a2', name: 'Salt nicotine', pg: 50 }
        ]
      })
  })
})

describe('nicotines fetch action', () => {
  it('sets nicotines when data from the firebase is provided', () => {
    const store = mockStore({ nicotines: [] })

    nicotines.get.mockResolvedValue({
      docs: [
        { id: 'a1', data: () => ({ name: 'Generic nicotine', pg: 100 }) },
        { id: 'a2', data: () => ({ name: 'Salt nicotine', pg: 50 }) }
      ]
    })

    return store.dispatch(actions.fetch())
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: appActions.SET_LOADING, value: true },
          {
            type: actions.SET_NICOTINES,
            value: [
              { id: 'a1', name: 'Generic nicotine', pg: 100 },
              { id: 'a2', name: 'Salt nicotine', pg: 50 }
            ]
          },
          { type: appActions.SET_LOADING, value: false }
        ])
      })
  })

  // it('sets error when authentication with firebase fails', () => {
  //   const store = mockStore({ user: null })

  //   auth.signInWithEmailAndPassword.mockRejectedValue({ message: 'error occured' })

  //   return store.dispatch(actions.signIn('user@domain.com', 'qweqwe123'))
  //     .then(() => {
  //       expect(store.getActions()).toEqual([
  //         { type: actions.SET_LOADING, value: true },
  //         { type: actions.SET_ERROR, value: { message: 'error occured' } },
  //         { type: actions.SET_LOADING, value: false }
  //       ])
  //     })
  // })
})
