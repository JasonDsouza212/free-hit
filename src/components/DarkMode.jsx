import React, { useContext } from 'react'
import '../styles/DarkMode.css'
import { ToolContext } from '../App'
import { FaSun, FaMoon } from 'react-icons/fa'

const DarkMode = () => {
  const { darkMode, setDarkMode } = useContext(ToolContext)

  // darkmode function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)

    // Changing the nav bar theme during toggle
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute('content', darkMode ? '#373530' : '#f1f1ef')
  }

  return (
    <div>
      <button
        className={`dark-mode-toggle ${darkMode ? 'dark-mode' : ''}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <span className="icon" role="img" aria-label="moon">
            <FaMoon />
          </span>
        ) : (
          <span className="icon" role="img" aria-label="sun">
            <FaSun />
          </span>
        )}
      </button>
    </div>
  )
}

export default DarkMode
