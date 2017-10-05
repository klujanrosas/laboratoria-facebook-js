import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LoginScreen from './screens/LoginScreen'
import TimelineScreen from './screens/TimelineScreen'


class App extends Component {
  render() {
    return (
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
    )
  }
}


export default App
