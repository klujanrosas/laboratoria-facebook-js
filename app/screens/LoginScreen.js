import React, { Component } from 'react'

import { Container } from '../components/Container'
import { LoginForm } from '../components/Form'
import { SimpleInput } from '../components/Input'
import { FlatButton } from '../components/Button'

class LoginScreen extends React.Component {
  render() {
    return (
      <Container>
        <LoginForm>
          <SimpleInput
            label="Email:"
            placeholder="Ej. user@laboratoria.la"
          />
          <SimpleInput
            label="Contraseña"
            placeholder="***************"
            type="password"
          />
          <FlatButton label="iniciar sesión" />
        </LoginForm>
      </Container>
    )
  }
}

export default LoginScreen
