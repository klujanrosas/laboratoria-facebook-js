import {
  REQUEST_DATA_FROM_TOKEN,
  REQUEST_DATA_FROM_TOKEN_FAILURE,
  REQUEST_DATA_FROM_TOKEN_SUCCESS
} from './types'
import API from '../api'

export const requestDataFromToken = () => {
  return {
    type: REQUEST_DATA_FROM_TOKEN
  }
}

export const requestDataFromTokenSuccess = (data) => {
  return {
    type: REQUEST_DATA_FROM_TOKEN_SUCCESS,
    payload: data.payload
  }
}

export const requestDataFromTokenFailure = (error) => {
  return {
    type: REQUEST_DATA_FROM_TOKEN_FAILURE,
    payload: error
  }
}

export const attemptRequestDataFromToken = () => {
  return async (dispatch) => {
    dispatch(requestDataFromToken())
    try {
      const retrievedUserToken = API.getUserSession()
      const data = await API.getUserDataFromToken(retrievedUserToken)
      dispatch(requestDataFromTokenSuccess(data))
    } catch (error) {
      dispatch(requestDataFromTokenFailure(error.message))
    }
  }
}