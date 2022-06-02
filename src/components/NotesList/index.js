import React from 'react'
import Note from '../Note'
import AddNotes from '../AddNotes'

// Componente de container de anotações

const NotesList = ({ notes,  handleAddNotes, handleDeleteNotes }) => {
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
      {/* compoente para adicionar uma nova anotação */}
      <AddNotes handleAddNotes={handleAddNotes}/>
    </div>
  )
}

export default NotesList