import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const FlatButton = (props) => {
  const {
    label = 'label',
    onPress = () => console.log('button pressed'),
    color = null,
    size = null,
    labelColor = null
  } = props
  return (
    <div
      tabIndex={-3}
      role="button"
      className={classNames(
        'login-form__submit-button',
        { [`login-form__submit-button_${size}`]: size !== null },
        { [`login-form__submit-button_${color}`]: color !== null }
      )}
      onClick={onPress}
    >
      <p
        className={classNames(
          'submit-button__label',
          { [`label_${labelColor}`]: labelColor !== null }
        )}
      >
        {label.toUpperCase()}
      </p>
    </div>
  )
}

FlatButton.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  color: PropTypes.oneOf(['white', 'oceanblue', 'red', 'green']),
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
  labelColor: PropTypes.oneOf(['white', 'oceanblue'])
}

export default FlatButton
