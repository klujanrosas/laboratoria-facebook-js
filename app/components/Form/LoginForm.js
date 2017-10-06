import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class LoginForm extends React.Component {
  render() {
    const { children, isLoading } = this.props
    return (
      <div className={classNames('login-form', { 'login-form_loading': isLoading })}>
        {children}
        <figure className="back-face">
          <p>INICIANDO SESIÓN...</p>
        </figure>
        {this.props.errors && this.props.errors.map(error => <p className="login-form__error">{error}</p>)}
      </div>
    )
  }
}

LoginForm.propTypes = {
  children: PropTypes.any,
  isLoading: PropTypes.bool,
  errors: PropTypes.array
}

export default LoginForm
