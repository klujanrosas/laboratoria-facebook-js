import React from 'react'

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

export default LoginForm
