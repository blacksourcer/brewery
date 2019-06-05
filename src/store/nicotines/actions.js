import { nicotines } from '../../services/firebase'

import { setLoading, setError } from '../app/actions'

export const SET_NICOTINES = 'SET_NICOTINES'

export const setNicotines = (value = []) => ({
  type: SET_NICOTINES,
  value
})

export const fetch = () => dispatch => {
  dispatch(setLoading())

  return nicotines.get()
    .then((query) => dispatch(setNicotines(
      query.docs.map(
        doc => ({ id: doc.id, ...doc.data() })
      )
    )))
    .catch((err) => dispatch(setError(err)))
    .finally(() => dispatch(setLoading(false)))
}
