import React from 'react'
import PropTypes from 'prop-types'

const TimelineContent = ({ children }) => {
  return (
    <div className="timeline__content">
      {children}
    </div>
  )
}

TimelineContent.propTypes = {
  children: PropTypes.any
}

export default TimelineContent
