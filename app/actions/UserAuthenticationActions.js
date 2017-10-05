import API from '../api'
import {
  PASSWORD_INPUT_CHANGE,
  USERNAME_INPUT_CHANGE,
  LOGIN_SUBMIT,
  LOGIN_SUBMIT_FAILURE,
  LOGIN_SUBMIT_SUCCESS,
  USER_LOGOUT,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_SUCCESS
} from './types'


export const passwordInputChange = (value) => {
  return {
    type: PASSWORD_INPUT_CHANGE,
    payload: value
  }
}

export const usernameInputChange = (value) => {
  return {
    type: USERNAME_INPUT_CHANGE,
    payload: value
  }
}

export const loginSubmit = () => {
  return {
    type: LOGIN_SUBMIT,
  }
}

export const loginSubmitSuccess = (data) => {
  return {
    type: LOGIN_SUBMIT_SUCCESS,
    payload: data
  }
}

export const loginSubmitFailure = (error) => {
  return {
    type: LOGIN_SUBMIT_FAILURE,
    payload: error
  }
}

export const attemptLogin = (username, password) => {
  console.log('attempting login with', { username, password })
  if (username.errors.length === 0 && password.errors.length === 0) {
    return async (dispatch) => {
      dispatch(loginSubmit())
      try {
        const data = await API.login({ username: username.value, password: password.value })
        dispatch(loginSubmitSuccess(data))
      } catch (error) {
        dispatch(loginSubmitFailure(error.message))
      }
    }
  }
  return dispatch => {
    dispatch(loginSubmitFailure('Primero arregle los errores mencionados.'))
  }
}

export const logout = () => {
  return {
    type: USER_LOGOUT
  }
}

export const logoutSuccess = () => {
  return {
    type: USER_LOGOUT_SUCCESS
  }
}

export const logoutFailure = () => {
  return {
    type: USER_LOGOUT_FAILURE
  }
}

export const attemptLogout = () => {
  return (dispatch) => {
    API.clearUserSession()
    dispatch(logoutSuccess())
  }
}
