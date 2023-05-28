import React, { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import freehitlogo from '../images/free-logo.png'
import Button from './Button'
import ButtonLinks from './Data/categories'
import { ToolContext } from '../App'
import { Link } from 'react-router-dom'

const Header = () => {
  const { searchTerm, setSearchTerm, filteredSuggestions, filterProduct } =
    useContext(ToolContext)
  const handleSuggestionClick = (value) => {
    document.getElementById('serch-suggestions').classList.add('diplay-none')
    setSearchTerm(value)
  }

  const handleChageInInput = (event) => {
    setSearchTerm(event.target.value)
    let targetElem = document.getElementById('serch-suggestions')
    if (
      filteredSuggestions.length > 0 &&
      targetElem.className.includes('diplay-none')
    ) {
      targetElem.classList.remove('diplay-none')
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="wrapper">
          <input type="checkbox" id="btn" hidden />
          <label htmlFor="btn" className="menu-btn">
            <i className="fa ri-menu-fill"></i>
            <i className="fa ri-close-line"></i>
          </label>
          <nav id="sidebar">
            <div className="title">
              <ul className="pages-sidebar">
                <li>
                  <Link to="/">
                    <i className="ri-home-4-fill"></i> Home
                  </Link>
                </li>
                <li>
                  <Link to="/bookmarks">
                    <i className="ri-bookmark-fill"></i> Bookmark
                  </Link>
                </li>
              </ul>
            </div>
            <ul className="list-items">
              {ButtonLinks.map((buttonLink) => (
                <Button
                  key={buttonLink.id}
                  button={buttonLink}
                  filterProduct={filterProduct}
                />
              ))}
            </ul>
          </nav>
        </div>
        <div className="Free-Hit">
          <Link to="/about">
            <img className="free-logo" src={freehitlogo} alt="" />
          </Link>
          <Link to="/about" className="free-word">
            Free-Hit
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="search_box">
          <input
            type="text"
            className="input"
            placeholder="search for the tools..."
            value={searchTerm}
            onChange={(e) => handleChageInInput(e)}
          />
          {searchTerm.length > 0 && (
            <div
              className="close"
              onClick={() => {
                setSearchTerm('')
              }}
            />
          )}
          <div className="">
            <i className="fas fa-search">
              <FaSearch />
            </i>
          </div>
        </div>
        {filteredSuggestions.length > 0 && (
          <ul className="hnav-suggestionbar" id="serch-suggestions">
            {/* This shows as a list of suggestions based on the search term */}
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
      </div>
      <ul className="pages">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bookmarks">Bookmarks</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
