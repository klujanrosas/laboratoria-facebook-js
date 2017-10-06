import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FlatButton } from '../Button'

class PostDisplay extends Component {
  constructor(props) {
    super(props)

    const { content = 'default content' } = props

    this.state = {
      innerContent: content,
      editing: false
    }
  }

  renderEditOrDisplayContent = () => {
    if (!this.state.editing) {
      return (
        <div className="post-display__content">
          <p>
            {this.state.innerContent}
          </p>
        </div>
      )
    }

    return (
      <div className="post-display__content">
        <textarea value={this.state.innerContent} />
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
            onPress={() => this.setState({ editing: false })}
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
          onPress={() => this.setState({ editing: false })}
          label="Guardar Cambios"
          size="m"
          color="green"
          labelColor="white"
        />
        <FlatButton
          onPress={() => this.setState({ editing: false })}
          label="Cancelar cambios"
          size="m"
          color="red"
          labelColor="white"
        />
      </div>
    )
  }

  render() {
    const {
      onDelete,
      onEdit,
      content = 'Lorem ipsum'
    } = this.props

    return (
      <div className="post-display">
        {this.renderEditOrDisplayContent()}
        {this.renderEditOrDisplayActions()}
      </div>
    )
  }
}

PostDisplay.propTypes = {
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  content: PropTypes.string
}

export default PostDisplay
