import React from 'react'
import PropTypes from 'prop-types'

const Timeline = ({ children }) => {
  return (
    <div className="timeline">
      {children}
    </div>
  )
}

Timeline.propTypes = {
  children: PropTypes.any
}

export default Timeline
