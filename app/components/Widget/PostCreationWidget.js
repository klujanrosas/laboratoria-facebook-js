import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addPost } from '../../actions'
import { FlatButton } from '../Button'

class PostCreationWidget extends Component {
  state = {
    postText: '',
    postType: 'publico',
    postImage: null,
    uploadImageLabel: 'Subir Imagen',
    error: null
  }

  handlePostTypeChange = (e) => {
    this.setState({ postType: e.nativeEvent.target.value })
  }

  handlePostTextChange = (e) => {
    this.setState({ postText: e.nativeEvent.target.value })
    if (e.nativeEvent.target.value.trim() !== '') {
      this.setState({
        error: null
      })
    }
  }

  handlePostSubmit = () => {
    if (!this.state.postText || this.state.postText === '') {
      this.setState({
        error: 'Debes ingresar texto'
      })
    } else {
      this.props.addPost({
        type: this.state.postType,
        content: this.state.postText,
        image: this.state.postImage
      })
      this.setState({
        postText: '',
        postType: 'publico'
      })
    }
  }

  handlePostImage = (e) => {
    const file = e.nativeEvent.target.files[0]

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
      this.setState({
        postImage: reader.result
      })
    }
  }

  render() {
    return (
      <div className="post-creation-widget">
        <div className="post-creation-widget__content">
          <textarea
            value={this.state.postText}
            onChange={this.handlePostTextChange}
            type="text"
            multiple
            placeholder="¿Qué estás pensando?"
          />
          {this.state.error ? <p className="post-creation-widget__error">{this.state.error}</p> : null}
        </div>
        <div className="post-creation-widget__actions">
          <input
            className="image-upload"
            id="laboratoria-image-upload"
            type="file"
            onChange={this.handlePostImage}
          />
          <label className="image-upload__label" htmlFor="laboratoria-image-upload">
            {/* eslint-disable */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
            <span>
              {this.state.uploadImageLabel}
            </span>
          </label>
          <select value={this.state.postType} onChange={this.handlePostTypeChange} >
            <option value="amigos" label="amigos" />
            <option value="publico" label="publico" />
          </select>
          <FlatButton
            onPress={this.handlePostSubmit}
            size="xl"
            label="Publicar"
          />
        </div>
      </div>
    )
  }
}

PostCreationWidget.propTypes = {
  addPost: PropTypes.func
}

export default connect(null, { addPost })(PostCreationWidget)
