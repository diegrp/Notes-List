import React from 'react'
import { MdDeleteForever } from 'react-icons/md';

// Componente de anotações

const Note = ({ id, text, date, handleDeleteNotes }) => {
  return (
    <div className='note'>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        {/* ícone de delete */}
        <MdDeleteForever className="delete-icon" size="1.2em" onClick={() => handleDeleteNotes(id)}/>
      </div>
    </div>
  )
}

export default Note