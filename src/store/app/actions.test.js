import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { auth } from '../../services/firebase'

import * as actions from './actions'

const mockStore = configureMockStore([ thunk ])

jest.mock('../../services/firebase')

describe('app mutations', () => {
  it('creates valid SET_INITIALIZING mutation', () => {
    expect(actions.setInitializing())
      .toEqual({
        type: actions.SET_INITIALIZING,
        value: true
      })
  })

  it('creates valid SET_LOADING mutation', () => {
    expect(actions.setLoading())
      .toEqual({
        type: actions.SET_LOADING,
        value: true
      })
  })

  it('creates valid SET_ERROR mutation', () => {
    expect(actions.setError({ message: 'an error' }))
      .toEqual({
        type: actions.SET_ERROR,
        value: { message: 'an error' }
      })
  })

  it('creates valid SET_USER mutation', () => {
    expect(actions.setUser({ id: 'a1', email: 'user@domain.com' }))
      .toEqual({
        type: actions.SET_USER,
        value: { id: 'a1', email: 'user@domain.com' }
      })
  })
})

describe('app initialize action', () => {
  beforeEach(() => {
    auth.onAuthStateChanged.mockReset()
  })

  it('sets user when session token is confirmed', () => {
    const store = mockStore({ user: null })

    store.dispatch(actions.initialize())

    expect(auth.onAuthStateChanged).toHaveBeenCalled()

    auth.onAuthStateChanged.mock.calls[0][0]({
      uid: 'a1',
      email: 'user@domain.com'
    })

    expect(store.getActions()).toEqual([
      { type: actions.SET_INITIALIZING, value: true },
      { type: actions.SET_USER, value: { id: 'a1', email: 'user@domain.com' } },
      { type: actions.SET_INITIALIZING, value: false }
    ])
  })

  it('unsets user when session token is missing', () => {
    const store = mockStore({
      user: {
        id: 'a1',
        email: 'user@domain.com'
      }
    })

    store.dispatch(actions.initialize())

    expect(auth.onAuthStateChanged).toHaveBeenCalled()

    auth.onAuthStateChanged.mock.calls[0][0](null)

    expect(store.getActions()).toEqual([
      { type: actions.SET_INITIALIZING, value: true },
      { type: actions.SET_USER, value: null },
      { type: actions.SET_INITIALIZING, value: false }
    ])
  })
})

describe('app signIn action', () => {
  it('sets user when authentication with firebase is successful', () => {
    const store = mockStore({ user: null })

    auth.signInWithEmailAndPassword.mockResolvedValue({
      user: {
        uid: 's0mes1b0ls',
        email: 'user@domain.com'
      }
    })

    store.dispatch(actions.signIn('user@domain.com', 'qweqwe123'))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: actions.SET_LOADING, value: true },
          { type: actions.SET_USER, value: { id: 's0mes1b0ls', email: 'user@domain.com' } },
          { type: actions.SET_LOADING, value: false }
        ])

        expect(auth.signInWithEmailAndPassword)
          .toHaveBeenCalledWith('user@domain.com', 'qweqwe123')
      })
  })

  it('sets error when authentication with firebase fails', () => {
    const store = mockStore({ user: null })

    auth.signInWithEmailAndPassword.mockRejectedValue({ message: 'error occured' })

    store.dispatch(actions.signIn('user@domain.com', 'qweqwe123'))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: actions.SET_LOADING, value: true },
          { type: actions.SET_ERROR, value: { message: 'error occured' } },
          { type: actions.SET_LOADING, value: false }
        ])
      })
  })
})

describe('app signOut action', () => {
  it('unsets the user when signing out with firebase', () => {
    const store = mockStore({ user: null })

    auth.signOut.mockResolvedValue()

    store.dispatch(actions.signOut())
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: actions.SET_LOADING, value: true },
          { type: actions.SET_USER, value: null },
          { type: actions.SET_LOADING, value: false }
        ])

        expect(auth.signOut).toHaveBeenCalled()
      })
  })
})
