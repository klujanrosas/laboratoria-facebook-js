import React, { Component } from 'react'

import { FlatButton } from '../Button'

class PostCreationWidget extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="post-creation-widget">
        <div className="post-creation-widget__content">
          <textarea
            type="text"
            multiple
            placeholder="¿Qué estás pensando?"
          />
        </div>
        <div className="post-creation-widget__actions">
          <select>
            <option value="amigos" label="amigos" />
            <option value="publico" label="publico" />
          </select>
          <FlatButton label="Publicar" />
        </div>
      </div>
    )
  }
}

export default PostCreationWidget
