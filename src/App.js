import React, { useState, useEffect } from 'react'
import NotesList from './components/NotesList'
import SearchNotes from './components/SearchNotes'
import Header from './components/Header'
import { nanoid } from 'nanoid'

const App = () => {

  // useStates espalhado em props para suas respectivas páginas
  
  const [ darkMode, setDarkMode ] = useState(false);
  const [ searchText, setSearchText ] = useState(''); 

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

  // Salvar qualquer alteração em nosso objeto de anotações, usando useEffect.

  useEffect(() => {
    /* conversão dos dados armazenados em localstorage para objeto e setar toda vez em notes, quando tiver esses dados */
    const savedNotes = JSON.parse(window.localStorage.getItem(
      'react-notes-app-data'
    ));
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[])

  useEffect(() => {
    /* salva no localstorage o objeto de dados que contém nossas anotações, convertido em JSON toda vez que sofre alguma
    alteração */
    window.localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    )
  },[notes]);
  
  // Render da página inicial do App, junto com os componentes necessários

  return (
    <main className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        {/* recebe um estado para alternância de modo, através de props que será utilizada em seu respectivo componente */}
        <Header
          handleToggleDarkMode={setDarkMode}
          stateDarkMode={darkMode}
        />
        {/* recebe um estado para armazenar texto de procura, através de props que será utilizada em seu respectivo componente */}
        <SearchNotes  
          handleSearchNotes={setSearchText}
        />
        {/* recebe funções para adicionar e deletar através de props que serão utilizadas nos respectivos componentes */}
        <NotesList 
          /* procura dentro do nosso state notes, text com letra minúscula e que esteja dentro do nosso outro estado,
          caso não tiver nada, mostre todas as anotações */
          notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))}
          handleAddNotes={addNote}
          handleDeleteNotes={deleteNote}
        />
      </div>
    </main>
  )
}

export default App;