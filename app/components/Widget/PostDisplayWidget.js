import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { PostDisplay } from '../Widget'
import { FlatButton } from '../Button'

class PostDisplayWidget extends Component {
  state = {
    showOfType: 'publico'
  }

  renderPosts() {
    const { posts } = this.props
    if (!posts) return null
    return posts.filter(post => post.type === this.state.showOfType)
      .map(post => (
        <PostDisplay
          id={post.id}
          key={post.id} // don't do this, really
          content={post.content}
          image={post.image}
        />
      ))
  }

  render() {
    return (
      <div className="post-display-widget">
        <div className="post-display-widget__actions">
          <FlatButton
            label="Posts de amigos"
            onPress={() => this.setState({ showOfType: 'amigos' })}
            size="l"
          />
          <FlatButton
            label="Posts públicos"
            onPress={() => this.setState({ showOfType: 'publico' })}
            size="l"
          />
        </div>
        <div className="post-display-widget__content">
          <p className="title">{'Viendo posts '} {this.state.showOfType === 'amigos' ? 'para amigos.' : 'públicos.'}</p>
          {this.renderPosts()}
        </div>
      </div>
    )
  }
}

PostDisplayWidget.propTypes = {
  posts: PropTypes.array
}

export default PostDisplayWidget
