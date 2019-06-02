import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { auth } from '../../services/firebase'

import * as actions from './actions'
import * as appActions from '../app/actions'

const mockStore = configureMockStore([ thunk ])

jest.mock('../../services/firebase')

describe('user actions', () => {
  it('creates valid signIn action on success', () => {
    const store = mockStore({ user: null })

    auth.signInWithEmailAndPassword.mockResolvedValue({})

    return store.dispatch(actions.signIn('user@domain.com', 'qweqwe123'))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: appActions.LOADING },
          { type: actions.SIGN_IN, email: 'user@domain.com' },
          { type: appActions.LOADED }
        ])
      })
  })

  it('creates valid signIn action on failure', () => {
    const store = mockStore({ user: null })

    auth.signInWithEmailAndPassword.mockRejectedValue({ message: 'error occured' })

    return store.dispatch(actions.signIn('user@domain.com', 'qweqwe123'))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: appActions.LOADING },
          { type: appActions.ERROR, error: { message: 'error occured' } },
          { type: appActions.LOADED }
        ])
      })
  })

  it('creates valid signOut action', () => {
    expect(actions.signOut())
      .toEqual({
        type: actions.SIGN_OUT
      })
  })
})
