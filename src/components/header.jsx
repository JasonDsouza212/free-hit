import React from 'react'
import freehitlogo from '../images/freehitLogo.png'

const Header = ({ searchTerm, setSearchTerm, filteredSuggestions }) => {
  const handleSuggestionClick = (value) => {
    document.getElementById('serch-suggestions').classList.add('diplay-none');
    setSearchTerm(value)
  }

  const handleChageInInput = (event)=>{
    setSearchTerm(event.target.value);
    let targetElem = document.getElementById('serch-suggestions');
    if( filteredSuggestions.length > 0 && targetElem.className.includes('diplay-none')){
      targetElem.classList.remove('diplay-none');
    }
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
              onChange={(e)=> handleChageInInput(e)}
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
            <ul className="hnav-suggestionbar" id='serch-suggestions'>
              {/* This shows as a list of suggestions based on the search term
               */}
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
