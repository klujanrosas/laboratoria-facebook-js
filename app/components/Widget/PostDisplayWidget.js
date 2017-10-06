import React, { Component } from 'react'

import { PostDisplay } from '../Widget'

import { FlatButton } from '../Button'

class PostDisplayWidget extends Component {
  state = {
    showOfType: 'public'
  }

  renderPosts() {
    const { posts } = this.props
    return posts.filter(post => post.type === this.state.showOfType)
      .map(post => (
        <PostDisplay
          key={Math.random()} // don't do this, really
          content={post.content}
        />
      ))
  }

  render() {
    return (
      <div className="post-display-widget">
        <div className="post-display-widget__actions">
          <FlatButton
            label="Posts de amigos"
            onPress={() => this.setState({ showOfType: 'friends' })}
            size="l"
          />
          <FlatButton
            label="Posts públicos"
            onPress={() => this.setState({ showOfType: 'public' })}
            size="l"
          />
        </div>
        <div className="post-display-widget__content">
          {this.renderPosts()}
        </div>
      </div>
    )
  }
}

export default PostDisplayWidget
