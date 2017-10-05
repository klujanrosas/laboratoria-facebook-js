import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import localForage from 'localforage'

import store from './config/createStore'
import LoginScreen from './screens/LoginScreen'
import TimelineScreen from './screens/TimelineScreen'
import { ActivityIndicator } from './components/ActivityIndicator'

class App extends Component {
  state = {
    mounted: false
  }
  componentDidMount() {
    persistStore(
      store,
      {
        storage: localForage,
      },
      () => {
        this.setState({ mounted: true })
      }
    )
  }

  render() {
    if (!this.state.mounted) {
      return <ActivityIndicator />
    }
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route
              path="/timeline"
              component={TimelineScreen}
            />
            <Route
              path="/"
              component={LoginScreen}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}


export default App
