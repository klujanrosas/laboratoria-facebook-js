import API from '../api'
import {
  PASSWORD_INPUT_CHANGE,
  USERNAME_INPUT_CHANGE,
  LOGIN_SUBMIT,
  LOGIN_SUBMIT_FAILURE,
  LOGIN_SUBMIT_SUCCESS
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
  return async (dispatch) => {
    dispatch(loginSubmit())
    try {
      const data = await API.login({ username, password })
      dispatch(loginSubmitSuccess(data))
    } catch (error) {
      dispatch(loginSubmitFailure(error.message))
    }
  }
}