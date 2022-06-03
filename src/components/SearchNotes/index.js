import React from 'react'
import { MdSearch } from 'react-icons/md'

// Componente de pesquisa de anotações

const SearchNotes = ({ handleSearchNotes }) => {
  return (
    <div className="search">
      {/* ícone de busca */}
      <MdSearch size="1.2em" className="search-icon" />
      <input 
        type="text" 
        placeholder="Faça a sua pesquisa..." 
        onChange={({target}) => handleSearchNotes(target.value)}
      />
    </div>
  )
}

export default SearchNotes