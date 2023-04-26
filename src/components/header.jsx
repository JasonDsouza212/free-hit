import React from 'react'
import freehitlogo from '../images/freehitLogo.png'
import {AiOutlineSearch} from 'react-icons/ai'

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="title-bar" name="Top">
      <div className='logo-name'>
        <img className="logo" src={freehitlogo} alt="My Image" />
        <span className='name'>FREE-HIT</span> 
        
      </div>
      <div className="hnav-links">
          <input
            type="text"
            placeholder=" Search for a tool or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <AiOutlineSearch className='search-icon'/>
      </div>
    </header>
  )
}

export default Header
