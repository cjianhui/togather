import * as types from './types'
import { loginAPI, signupUserAPI } from '../../api'

const setLoggedInState = (loggedInState) => ({
  type: types.SET_LOGGED_IN_STATE,
  loggedInState,
})

const login = (email, password) => {
  const action = (dispatch) => {
    if (loginAPI(email, password)) {
      dispatch(setLoggedInState(true))
      return true
    }
    dispatch(setLoggedInState(false))
    return false
  }
  return action
}

const signup = (email, password, firstName, lastName) => {
  const action = (dispatch) => {
    if (signupUserAPI(email, password, firstName, lastName)) {
      dispatch(setLoggedInState(true))
      return true
    }
    dispatch(setLoggedInState(false))
    return false
  }

  return action
}

export { login, signup, setLoggedInState }
