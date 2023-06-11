import React, { useContext, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import freehitlogo from '../assets/free-logo.png'
import ButtonLinks from '../utils/data/categories'
import { ToolContext } from '../App'
import { useLocation } from 'react-router-dom'
import TwitterButton from './TwitterButton'
import { NavLink, useSearchParams } from "react-router-dom"
import { msg } from '../utils/data/message'
import "../styles/header.css"

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  let filters = searchParams.getAll('filters').length > 0 ? searchParams.getAll('filters') : ["all"]
  filters = filters[0].split(",")
  const location = useLocation()
  const sideNavRef = useRef(null)
  const { searchTerm, setSearchTerm, filteredSuggestions } =
    useContext(ToolContext)
  const handleSuggestionClick = (value) => {
    document.getElementById('serch-suggestions').classList.add('diplay-none')
    setSearchTerm(value)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  })

  function handleClickOutside(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      document.getElementById("btn").checked = false;
    }
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
  
  const handleAddFilter = (filter, event) => {
    filter = filter.toLowerCase();
    setSearchParams(prevParams => {
      let options = prevParams.getAll('filters') || []
      if (options.length > 0) {
        options = options[0].split(",")
      }
      if (options.includes(filter)) {
        if (options.length > 1) {
          prevParams.set('filters', [...options].filter(f => f != filter))
        } else {
          prevParams.delete('filters')
        }
      } else {
        if (event.ctrlKey) {
          prevParams.set('filters', [...prevParams.getAll("filters"), filter])
        } else {
          prevParams.set('filters', filter)
        }
      }
      return prevParams
    })
  }

  return (
    <nav className="navbar">
      <div className="nav-container" ref={sideNavRef}>
        <div className="wrapper">
          <input type="checkbox" id="btn" hidden />
          <label htmlFor="btn" className="menu-btn">
            <i className="fa ri-menu-fill"></i>
            <i className="fa ri-close-line"></i>
          </label>
          {location.pathname === '/about' ? (
            <nav id="sidebar">
              <ul className="list-items list-item">
                <li className='about-list'>
                  <NavLink to="/">
                    <i className="ri-home-4-fill"></i> Home
                  </NavLink>
                </li>
                <li className='about-list'>
                  <NavLink to="/bookmarks">
                    <i className="ri-bookmark-fill"></i> Bookmarks
                  </NavLink>
                </li>
                <li className='about-list'>
                  <TwitterButton message={msg} />
                </li>
              </ul>
            </nav>
          ) : (
            <nav id="sidebar">
              <div className="title">
                <ul className="pages-sidebar">
                  <li>
                    <NavLink to="/">
                      <i className="ri-home-4-fill"></i> Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bookmarks">
                      <i className="ri-bookmark-fill"></i> Bookmark
                    </NavLink>
                  </li>
                </ul>
              </div>
              <ul className="list-items">
                {ButtonLinks.map((buttonLink) => (
                  <li
                  key={buttonLink.id}
                  className={filters.includes(buttonLink.category.toLocaleLowerCase()) ? "active-filter" : ""}
                >
                  <button
                    onClick={(e) => {handleAddFilter(buttonLink.category, e)}}
                  >
                    {buttonLink.name}
                  </button>
                </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        <h1 className="Free-Hit">
          <NavLink to="/about">
            <img className="free-logo" src={freehitlogo} alt="logo" />
          </NavLink>
          <NavLink className="free-word" to="/about">
            Free-Hit
          </NavLink>
        </h1>
      </div>
      {location.pathname !== '/about' && location.pathname !== '/community' && (
        <div className="container">
          <div className="search_box">
            <input
              type="text"
              className="input"
              placeholder="Search..."
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
            <div className="btn btn_common">
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
      )}
      <ul className="pages">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/bookmarks">Bookmarks</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header
