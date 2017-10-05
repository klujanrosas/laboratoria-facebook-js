import React from 'react'
import PropTypes from 'prop-types'

class LoginForm extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className="login-form">
        {children}
      </div>
    )
  }
}

LoginForm.propTypes = {
  children: PropTypes.any
}

export default LoginForm
