import React from 'react'

// Componente Header com toggle mode

const Header = ({ handleToggleDarkMode, stateDarkMode }) => {
  return (
    <div className="header">
      <h1>Todo List</h1>
      <button className={`${stateDarkMode ? "save":"save light"}`} onClick={() => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)}>
      {`${stateDarkMode ? 'Light Mode':'Dark Mode'}`}
      </button>
    </div>
  )
}

export default Header