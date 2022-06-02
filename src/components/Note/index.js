import React from 'react'

// Componente de anotações

const Note = ({ id, text, date }) => {
  return (
    <div>
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
      </div>
    </div>
  )
}

export default Note