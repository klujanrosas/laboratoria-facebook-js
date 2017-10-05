import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import { autoRehydrate } from 'redux-persist'
import reducers from '../reducers'


export default createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(ReduxThunk),
    autoRehydrate()
  )
)
