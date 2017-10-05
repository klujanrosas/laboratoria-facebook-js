import React from 'react'

const FlatButton = ({ label = 'label', onPress = () => console.log('button pressed') }) => {
  return (
    <div
      tabIndex={-3}
      role="button"
      className="login-form__submit-button"
      onClick={onPress}
    >
      <p className="submit-button__label">
        {label.toUpperCase()}
      </p>
    </div>
  )
}

export default FlatButton
