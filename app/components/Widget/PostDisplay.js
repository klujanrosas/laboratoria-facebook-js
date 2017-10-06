import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { updatePost, deletePost } from '../../actions'
import { FlatButton } from '../Button'

class PostDisplay extends Component {
  constructor(props) {
    super(props)

    const { content = 'default content' } = props

    this.state = {
      innerContent: content,
      newInnerContent: content,
      editing: false
    }
  }

  handlePostDeletion = () => {
    // eslint-disable-next-line no-alert
    if (confirm('Segur@ de eliminar este post? Es irrecuperable!')) {
      this.props.deletePost(this.props.id)
    }
  }

  handlePostUpdate = () => {
    this.setState({ editing: false })
    this.props.updatePost({
      id: this.props.id,
      newContent: this.state.newInnerContent
    })
    this.setState({ innerContent: this.state.newInnerContent })
  }

  handlePostEditCancel = () => {
    this.setState({ newInnerContent: this.state.innerContent })
    this.setState({ editing: false })
  }

  handlePostContentChange = (e) => {
    this.setState({ newInnerContent: e.nativeEvent.target.value })
  }

  renderEditOrDisplayContent = () => {
    if (!this.state.editing) {
      return (
        <div className="post-display__content">
          {!this.props.image ? null : <img alt="Imagen del post" src={this.props.image} /> }
          <p>
            {this.state.innerContent}
          </p>
        </div>
      )
    }

    return (
      <div className="post-display__content">
        {!this.props.image ? null : <img alt="Imagen del post" src={this.props.image} /> }
        <textarea
          onChange={this.handlePostContentChange}
          value={this.state.newInnerContent}
        />
      </div>
    )
  }

  renderEditOrDisplayActions = () => {
    if (!this.state.editing) {
      return (
        <div className="post-display__actions">
          <FlatButton
            onPress={() => this.setState({ editing: true })}
            label="Editar"
            size="m"
            color="green"
            labelColor="white"
          />
          <FlatButton
            onPress={this.handlePostDeletion}
            label="Eliminar"
            size="m"
            color="red"
            labelColor="white"
          />
        </div>
      )
    }

    return (
      <div className="post-display__actions">
        <FlatButton
          onPress={this.handlePostUpdate}
          label="Guardar Cambios"
          size="m"
          color="green"
          labelColor="white"
        />
        <FlatButton
          onPress={this.handlePostEditCancel}
          label="Cancelar cambios"
          size="m"
          color="red"
          labelColor="white"
        />
      </div>
    )
  }

  render() {
    return (
      <div className="post-display">
        {this.renderEditOrDisplayContent()}
        {this.renderEditOrDisplayActions()}
      </div>
    )
  }
}

PostDisplay.propTypes = {
  updatePost: PropTypes.func,
  deletePost: PropTypes.func,
  content: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string
}

export default connect(null, { updatePost, deletePost })(PostDisplay)
