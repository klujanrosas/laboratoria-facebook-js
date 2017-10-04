import React, { Component } from 'react'

class SimpleInput extends Component {
  render() {
    const {
      label = 'label',
      placeholder = 'placeholder',
      type = 'text',
      errors = []
    } = this.props
    
    return (
      <div className="login-form__input-container">
        <p className="input-container__label">
          {label}
        </p>
        <input
          autofocus
          placeholder={placeholder}
          type={type}
          class="input-container__text-input"
        />
        <div className="input-container__field-error">
          {this.props.errors && this.props.errors.map(error => <p>{error}</p>)}
        </div>
      </div>
    )
  }
}

export default SimpleInput
