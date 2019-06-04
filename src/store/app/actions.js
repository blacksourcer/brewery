import { auth } from '../../services/firebase'

export const SET_INITIALIZING = 'APP_SET_INITIALIZING'
export const SET_LOADING = 'APP_SET_LOADING'
export const SET_ERROR = 'APP_SET_ERROR'
export const SET_USER = 'APP_SET_USER'

export const setInitializing = (value = true) => ({
  type: SET_INITIALIZING,
  value
})

export const setLoading = (value = true) => ({
  type: SET_LOADING,
  value
})

export const setError = (value) => ({
  type: SET_ERROR,
  value
})

export const setUser = (value) => ({
  type: SET_USER,
  value
})

export const initialize = () => dispatch => {
  dispatch(setInitializing())

  auth.onAuthStateChanged((user) => {
    dispatch(setUser(
      user
        ? { id: user.uid, email: user.email }
        : null
    ))

    dispatch(setInitializing(false))
  })
}

export const signIn = (email, password) => dispatch => {
  dispatch(setLoading())

  return auth.signInWithEmailAndPassword(email, password)
    .then((res) => dispatch(setUser({
      id: res.user.uid,
      email: res.user.email
    })))
    .catch((err) => dispatch(setError(err)))
    .finally(() => dispatch(setLoading(false)))
}

export const signOut = () => dispatch => {
  dispatch(setLoading())

  return auth.signOut()
    .then(() => dispatch(setUser(null)))
    .catch((err) => dispatch(setError(err)))
    .finally(() => dispatch(setLoading(false)))
}
