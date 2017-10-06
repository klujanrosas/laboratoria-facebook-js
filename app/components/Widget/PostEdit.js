import React from 'react'

import { FlatButton } from '../Button'

const PostEdit = ({ onDelete, onEdit, content = 'Lorem ipsum' }) => {
  return (
    <div className="post-edit">
      <div className="post-edit__content">
        <textarea
          value={content}
        />
      </div>
      <div className="post-edit__actions">
        <FlatButton
          onPress={() => console.log('Guardar Cambios')}
          label="Guardar Cambios"
          size="m"
          color="green"
          labelColor="white"
        />
        <FlatButton
          onPress={() => console.log('Cancelar')}
          label="Cancelar"
          size="m"
          color="red"
          labelColor="white"
        />
      </div>
    </div>
  )
}

export default PostEdit
