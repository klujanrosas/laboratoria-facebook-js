import React, { Component } from 'react'

class PostCreationWidget extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="post-creation-widget">
        {children}
      </div>
    )
  }
}

export default PostCreationWidget
