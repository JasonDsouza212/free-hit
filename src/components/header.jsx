import React from 'react'
import freehitlogo from '../images/freehitLogo.png'

const Header = ({
  searchTerm,
  setSearchTerm,
  showSuggestions,
  filteredSuggestions,
}) => {
  const handleSuggestionClick = (value) => {
    setSearchTerm(value)
  }
  return (
    <header className="title-bar" name="Top">
      <h1>
        <img className="logo" src={freehitlogo} alt="My Image" />
        FREE-HIT
      </h1>
      <ul className="hnav-links">
        <li className="hnav-link">
          <div>
            <input
              type="text"
              placeholder=" Search for a tool or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm.length > 0 && (
              <div
                className="close"
                onClick={() => {
                  setSearchTerm('')
                }}
              />
            )}
          </div>
          {filteredSuggestions.length > 0 && (
            <ul className="hnav-suggestionbar">
              {filteredSuggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="hnav-suggestion"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </header>
  )
}

export default Header
