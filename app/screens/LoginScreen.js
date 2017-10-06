import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { passwordInputChange, usernameInputChange, attemptLogin } from '../actions'
import API from '../api'

import { Container } from '../components/Container'
import { LoginForm } from '../components/Form'
import { SimpleInput } from '../components/Input'
import { FlatButton } from '../components/Button'


class LoginScreen extends Component {
  componentDidMount() {
    if (API.getUserSession()) {
      this.props.history.push('/timeline')
    }
  }

  componentWillUpdate() {
    if (API.getUserSession()) {
      this.props.history.push('/timeline')
    }
  }

  handlePasswordChange = (e) => {
    this.props.passwordInputChange(e.nativeEvent.target.value)
  }

  handleUsernameChange = (e) => {
    this.props.usernameInputChange(e.nativeEvent.target.value)
  }

  handleLoginAttempt = () => {
    this.props.attemptLogin(
      this.props.username,
      this.props.password,
    )
  }

  render() {
    return (
      <Container>
        <LoginForm isLoading={this.props.isLoading} errors={this.props.formErrors}>
          <SimpleInput
            label="Email:"
            placeholder="Ej. user@laboratoria.la"
            onChangeText={this.handleUsernameChange}
            value={this.props.username.value}
            errors={this.props.username.errors}
            type="text"
          />
          <SimpleInput
            label="Contraseña"
            placeholder="***************"
            onChangeText={this.handlePasswordChange}
            value={this.props.password.value}
            errors={this.props.password.errors}
            type="password"
          />
          <FlatButton
            onPress={this.handleLoginAttempt}
            label="iniciar sesión"
          />
        </LoginForm>
      </Container>
    )
  }
}

LoginScreen.propTypes = {
  passwordInputChange: PropTypes.func.isRequired,
  usernameInputChange: PropTypes.func.isRequired,
  attemptLogin: PropTypes.func,
  username: PropTypes.object,
  password: PropTypes.object,
  isLoading: PropTypes.bool,
  history: PropTypes.shape,
  formErrors: PropTypes.array
}

const mapStateToProps = (state) => {
  const { loginForm: { username, password, isLoading, errors }, user } = state.UserAuthentication
  return {
    username,
    password,
    isLoading,
    user,
    formErrors: errors
  }
}

export default connect(
  mapStateToProps, {
    passwordInputChange,
    usernameInputChange,
    attemptLogin
  })(LoginScreen)
