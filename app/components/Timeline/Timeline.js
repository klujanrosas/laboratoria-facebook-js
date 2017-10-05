import React, { Component } from 'react'

class Timeline extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="timeline">
        {children}
      </div>
    )
  }
}

export default Timeline
