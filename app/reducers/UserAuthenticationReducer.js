import validator from 'validator'
import {
  LOGIN_FORM_SUBMIT,
  PASSWORD_INPUT_CHANGE,
  USERNAME_INPUT_CHANGE
} from '../actions/types'

const INITIAL_STATE = {
  loginForm: {
    username: {
      value: '',
      errors: []
    },
    password: {
      value: '',
      errors: []
    },
  },
  user: null
}

const validate = (payload) => {
  const errors = []
  if (!validator.isEmail(payload)) errors.push('Escribe un email válido.')
  if (validator.isEmpty(payload)) errors.push('Este campo no puede estar vacío.')
  return errors
}

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case USERNAME_INPUT_CHANGE:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          username: {
            ...state.loginForm.username,
            value: payload,
            errors: validate(payload)
          }
        }
      }
    case PASSWORD_INPUT_CHANGE:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          password: {
            ...state.loginForm.password,
            value: payload
          }
        }
      }
    default:
      return state
  }
}
