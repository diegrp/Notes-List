import React from 'react'

const AddNotes = () => {
  return (
    <div className="note new">
      <textarea
        cols="8"
        rows="10"
        value={}
        onChange={}
        placeholder="Digite uma nova anotação..."
      >
      </textarea>
      <div className="note-footer">
        <small>Characteres</small>
        <button className="save">Salvar</button>
      </div>
    </div>
  )
}

export default AddNotes