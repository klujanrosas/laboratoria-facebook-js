import {
  PASSWORD_INPUT_CHANGE,
  USERNAME_INPUT_CHANGE
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

