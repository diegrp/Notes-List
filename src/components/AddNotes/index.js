import React, { useState } from 'react';

// Componete para adicionar novas anotações

const AddNotes = ({ handleAddNotes }) => {

  // Texto de nova anotação a ser adicionada

  const [ noteText, setNoteText ] = useState('');

  // Quantidade limite de caracteres
  const characterLimit = 200;
  
  /* se a quantidade de caracteres for maior ou igual á 0, atualiza nosso estado de acordo com o que estamos digitando */
  const handleChange = ({ target }) => {
    if(characterLimit - target.value.length >= 0){
      setNoteText(target.value);
    }
  }
  
  /* envia se eu tiver algum texto e após o envio limpar o estado */
  const handleSaveClick = () => {
    if(noteText.trim().length > 0){
      handleAddNotes(noteText);
      setNoteText('');
    }
  }

  return (
    <div className="note new">
      <textarea
        cols="8"
        rows="10"
        value={noteText}
        onChange={handleChange}
        placeholder="Digite uma nova anotação..."
      >
      </textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Characteres</small>
        <button className="save" onClick={handleSaveClick}>Salvar</button>
      </div>
    </div>
  )
}

export default AddNotes