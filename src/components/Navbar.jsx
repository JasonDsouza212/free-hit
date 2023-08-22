import React, { useEffect, useRef } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import freehitlogo from '../assets/logo.webp'
import freehitlogodark from '../assets/darkmode-logo.webp'
import { useLocation } from 'react-router-dom'
import { NavLink, useSearchParams } from "react-router-dom"
import "../styles/header.css"
import Sidebar from './Sidebar'
import { ToolContext } from '../App';
import { useContext } from 'react';
import mobilelogo from '../assets/mobileview.webp'
import { useState } from 'react'


const Header = ({ filteredSuggestions }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { darkMode, debounce } = useContext(ToolContext);
  const location = useLocation()
  const sideNavRef = useRef(null)
  const [search, setSearch] = useState('')

  const searchTerm = searchParams.get('q') || ''

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


  function setSearchTerm(val) {
    setSearchParams(prevParams => {
      if (val == "") {
        prevParams.delete('q')
      } else {
        prevParams.set('q', val)
      }
      return prevParams
    })
  }
  const handleChangeInInput = (event) => {
    const val = event.target.value
    setSearchTerm(val)
    setSearch(val)
    debounce(setSearchTerm, 500)(val);
  }
  const handleresetInput = () => {
    const val = ""
    setSearchTerm(val)
    setSearch(val)
    debounce(setSearchTerm, 500)(val);
  }
  

  // for NavLinks

  const NavLinks = [
    {
      title: 'Home',
      url: '/'
    },
    {
      title: 'Bookmarks',
      url: '/bookmarks'
    },
    {
      title: 'About',
      url: '/about'
    }
  ]


  return (
    <nav className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className={`nav-container ${darkMode ? 'dark-mode' : ''}`} ref={sideNavRef}>
        <Sidebar search={setSearch} />
        <h1 className={`Free-Hit ${darkMode ? 'dark-mode' : ''}`}>
          <NavLink to="/about" className='nav-link' aria-label='Go to about page'>
            <img
              className={`free-logo ${darkMode ? 'dark-mode' : ''}`}
              src={darkMode ? freehitlogodark : freehitlogo}
              alt="logo"
            />
          </NavLink>
          <NavLink to="/about" className='nav-link' aria-label='Go to about page'>
            <img
              className={`mobile-logo ${darkMode ? 'dark-mode' : ''}`}
              src={darkMode ? mobilelogo : mobilelogo}
              alt="logo"
            />
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
              value={search}
              onChange={(e) => handleChangeInInput(e)}
              id="search"
            />          
            {search? (
              <div className="btn btn_common">
                <i className="fas fa-search " onClick={()=>handleresetInput()}>
                  <FaTimes />
                </i>
              </div>
            ) : (
              <div className="btn btn_common" >
                <i className="fas fa-search">
                  <FaSearch />
                </i>
              </div>
            )}            
          </div>
          {(filteredSuggestions.length > 1 || (filteredSuggestions.length > 0 && filteredSuggestions[0] != searchTerm)) && (
            <ul className="hnav-suggestionbar" id="serch-suggestions">
              {/* This shows as a list of suggestions based on the search term */}
              {filteredSuggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  onClick={() => {
                    setSearchTerm(suggestion)
                    setSearch(suggestion)
                  }}
                  className="hnav-suggestion"
                >
                  {suggestion.charAt(0).toUpperCase() + suggestion.slice(1,)}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <ul className="pages">
        {NavLinks.map((item, index) => {
          return (
            <li key={index}>
              <NavLink className="hoverele" to={item.url}>{item.title}</NavLink>
            </li>
          )
        })}
      </ul>
    </  nav>
  );
}

export default Header
