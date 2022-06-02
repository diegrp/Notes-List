import React from 'react'
import Note from '../Note'

// Componente de container de anotações

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {/* mapeamento de anotações, vinda do nosso estado de notes*/}
      {notes.map((note) => {
        return(
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNotes={handleDeleteNotes} /* recebe id para deletar anotação */ 
          />
        )
      })}
    </div>
  )
}

export default NotesList