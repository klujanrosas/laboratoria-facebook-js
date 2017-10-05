import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TintedHeader extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="timeline__header">
        {children}
      </div>
    )
  }
}

TintedHeader.propTypes = {
  children: PropTypes.any
}

export default TintedHeader
