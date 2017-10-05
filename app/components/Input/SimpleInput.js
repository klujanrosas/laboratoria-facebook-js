import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SimpleInput extends Component {
  render() {
    const {
      label = 'label',
      placeholder = 'placeholder',
      type = 'text',
      errors = [],
      onChangeText,
      value
    } = this.props
    
    return (
      <div className="login-form__input-container">
        <p className="input-container__label">
          {label}
        </p>
        <input
          // autoFocus
          onChange={onChangeText}
          placeholder={placeholder}
          type={type}
          className="input-container__text-input"
          value={value}
        />
        <div className="input-container__field-error">
          {errors.length > 0 && this.props.errors.map(error => <p>{error}</p>)}
        </div>
      </div>
    )
  }
}

SimpleInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOfType(['text', 'password']),
  errors: PropTypes.array,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default SimpleInput
