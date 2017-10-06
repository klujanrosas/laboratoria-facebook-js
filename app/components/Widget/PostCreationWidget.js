import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addPost } from '../../actions'
import { FlatButton } from '../Button'

class PostCreationWidget extends Component {
  state = {
    postText: '',
    postType: 'publico',
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
        content: this.state.postText
      })
      this.setState({
        postText: '',
        postType: 'publico'
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
