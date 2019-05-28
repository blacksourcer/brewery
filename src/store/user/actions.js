export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'

export function signIn(email, password) {
  return { type: SIGN_IN, email, password }
}

export function signOut() {
  return { type: SIGN_OUT }
}
