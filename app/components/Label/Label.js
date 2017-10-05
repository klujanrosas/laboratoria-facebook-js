import React from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'

const Label = (props) => {
  const {
    content = 'label',
    color = 'white',
    size = 'm',
  } = props
  return (
    <p className={className(
      'label',
      `label_${color}`,
      `label_${size}`,
    )}
    >
      {content}
    </p>
  )
}

Label.propTypes = {
  content: PropTypes.string,
  color: PropTypes.oneOf(['white', 'oceanblue']),
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl'])
}

export default Label
