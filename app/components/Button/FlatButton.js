import React from 'react'

const FlatButton = ({ label = 'label', onPress = () => console.log('button pressed') }) => {
  return (
    <div
      role="button"
      class="login-form__submit-button"
      onClick={onPress}
    >
      <p class="submit-button__label">
        {label.toUpperCase()}
      </p>
    </div>
  )
}

export default FlatButton
