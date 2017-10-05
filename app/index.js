import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import './assets/styles/styles.scss'

import LoginScreen from './screens/LoginScreen'

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <LoginScreen />
  </Provider>,
  document.querySelector('.wrapper')
)
