import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import './assets/styles/styles.scss'

import LoginScreen from './screens/LoginScreen'

const createStoreWithMiddleware = applyMiddleware()(createStore)

render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <LoginScreen />
  </Provider>,
  document.querySelector('.wrapper')
)
