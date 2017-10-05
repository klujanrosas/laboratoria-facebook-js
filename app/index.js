import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

import './assets/styles/styles.scss'
import App from './App'

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)


const store = createStoreWithMiddleware(reducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.wrapper')
)
