import React from 'react'
import { render } from 'react-dom'
import './assets/styles/styles.scss'

import LoginScreen from './screens/LoginScreen'


render(
  <LoginScreen />,
  document.querySelector('.wrapper')
)