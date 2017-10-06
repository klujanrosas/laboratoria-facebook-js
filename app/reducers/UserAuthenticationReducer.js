import validator from 'validator'
import {
  PASSWORD_INPUT_CHANGE,
  USERNAME_INPUT_CHANGE,
  LOGIN_SUBMIT,
  LOGIN_SUBMIT_FAILURE,
  LOGIN_SUBMIT_SUCCESS,
  USER_LOGOUT_SUCCESS
} from '../actions/types'
import API from '../api'

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
    isLoading: false,
    errors: []
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
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        user: null
      }
    case LOGIN_SUBMIT:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          isLoading: true
        }
      }
    // eslint-disable-next-line no-case-declarations
    case LOGIN_SUBMIT_SUCCESS:
      const response = action.payload.data.payload
      if (typeof response === 'object') {
        // save session in localstorage
        API.saveUserSession(response.token)
        return {
          ...state,
          user: response,
          loginForm: {
            ...state.loginForm,
            isLoading: false,
            errors: []
          }
        }
      }
      return {
        ...state,
        user: null,
        loginForm: {
          ...state.loginForm,
          isLoading: false,
          errors: ['Contraseña o usuario inválidos.']
        }
      }
    case LOGIN_SUBMIT_FAILURE:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          errors: [action.payload]
        }
      }
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
