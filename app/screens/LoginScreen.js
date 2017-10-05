import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { passwordInputChange, usernameInputChange } from '../actions'

import { Container } from '../components/Container'
import { LoginForm } from '../components/Form'
import { SimpleInput } from '../components/Input'
import { FlatButton } from '../components/Button'


class LoginScreen extends Component {
  handlePasswordChange = (e) => {
    this.props.passwordInputChange(e.nativeEvent.target.value)
  }

  handleUsernameChange = (e) => {
    this.props.usernameInputChange(e.nativeEvent.target.value)
  }

  render() {
    return (
      <Container>
        <LoginForm>
          <SimpleInput
            label="Email:"
            placeholder="Ej. user@laboratoria.la"
            onChangeText={this.handleUsernameChange}
            value={this.props.username.value}
            errors={this.props.username.errors}
          />
          <SimpleInput
            label="Contraseña"
            placeholder="***************"
            onChangeText={this.handlePasswordChange}
            value={this.props.password.value}
            errors={this.props.password.errors}
            type="password"
          />
          <FlatButton label="iniciar sesión" />
        </LoginForm>
      </Container>
    )
  }
}

LoginScreen.propTypes = {
  passwordInputChange: PropTypes.func.isRequired,
  usernameInputChange: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string
}

const mapStateToProps = (state) => {
  const { loginForm: { username, password } } = state.UserAuthentication
  return {
    username,
    password
  }
}

export default connect(mapStateToProps, { passwordInputChange, usernameInputChange })(LoginScreen)
