import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import NotesList from './Components/NotesList'


const App = () => {

  // Objeto de dados que cotém anotações para serem procuradas, criadas e deletadas
  
  const [ notes, setNotes ] = useState([
    {
      id: nanoid(),
      text: "Esta é minha primeira anotação",
      date: "14/03/2022"
    },
    {
      id: nanoid(),
      text: "Esta é minha segunda anotação",
      date: "20/03/2022"
    },
    {
      id: nanoid(),
      text: "Esta é minha terceira anotação",
      date: "25/03/2022"
    },
    {
      id: nanoid(),
      text: "Esta é minha nova anotação",
      date: "31/03/2022"
    }
  ]);

  // Função para adicionar uma nova anotação

  /* recebe o text do nosso addNotes e adicionada em notes */

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [ ...notes, newNote ];
    setNotes(newNotes);
  }

  // Função para deletar anotações

  /* recebe o id e filtra somente notes que sejam diferentes ao id */
  
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }
  
  // Render da página inicial do App, junto com os componentes necessários

  return (
    <main>
      <div className="container">
        {/* recebe funções para adicionar e deletar através de props que serão utilizadas nos respectivos componentes */}
        <NotesList 
          /* procura dentro do nosso state notes, text com letra minúscula e que esteja dentro do nosso outro estado,
          caso não tiver nada, mostre todas as anotações */
          notes={notes}
          handleAddNotes={addNote}
          handleDeleteNotes={deleteNote}
        />
      </div>
    </main>
  )
}

export default App;