import React, { Component } from 'react'

class PostDisplayWidget extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="post-display-widget">
        {children}
      </div>
    )
  }
}

export default PostDisplayWidget
