import { auth } from '../../services/firebase'

import { loading, loaded, error } from '../app/actions'

export const SIGN_IN = 'USER_SIGN_IN'
export const SIGN_OUT = 'USER_SIGN_OUT'

export const signIn = (email, password) => dispatch => {
  dispatch(loading())

  return auth.signInWithEmailAndPassword(email, password)
    .then(() => dispatch({ type: SIGN_IN, email }))
    .catch((err) => dispatch(error(err)))
    .finally(() => dispatch(loaded()))
}

export function signOut () {
  return { type: SIGN_OUT }
}
