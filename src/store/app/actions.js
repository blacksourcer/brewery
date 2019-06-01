export const LOADING = 'APP_LOADING'
export const LOADED = 'APP_LOADED'
export const ERROR = 'APP_ERROR'

export function loading () {
  return { type: LOADING }
}

export function loaded () {
  return { type: LOADED }
}

export function error (error) {
  return { type: ERROR, error }
}
