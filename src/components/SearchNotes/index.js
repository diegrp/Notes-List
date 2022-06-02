import React from 'react'
import { MdSearch } from 'react-icons/md'

const SearchNotes = () => {
  return (
    <div className="search">
      {/* ícone de busca */}
      <MdSearch size="1.2em" className="search-icon" />
      <input 
        type="text" 
        placeholder="Faça a sua pesquisa..." 
      />
    </div>
  )
}

export default SearchNotes