import React,{useContext} from 'react';
import { FaSearch } from 'react-icons/fa';
import freehitlogo from '../images/free-logo.png';
import TwitterButton from './message/twitterbutton';
import { ToolContext } from '../App';

const Aboutnav = () => {
  const {
    searchTerm,
    setSearchTerm,
    filteredSuggestions,
    filterProduct
  }=useContext(ToolContext)

  const handleSuggestionClick = (value) => {
    document.getElementById('serch-suggestions').classList.add('diplay-none');
    setSearchTerm(value);
  };

  const handleChageInInput = (event) => {
    setSearchTerm(event.target.value);
    let targetElem = document.getElementById('serch-suggestions');
    if (filteredSuggestions.length > 0 && targetElem.className.includes('diplay-none')) {
      targetElem.classList.remove('diplay-none');
    }
  };

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
            <ul className="list-items">
              <li><a href="/"><i class="ri-home-4-fill"></i>Home</a></li>
              <li><a href="/bookmarks"><i class="ri-bookmark-fill"></i>Bookmarks</a></li>
              <li><TwitterButton message="Check out this awesome post! #ReactJS" /></li>
            </ul>
          </nav>
        </div>
        <h1 className="Free-Hit">
          <a href="/about">
            <img className="free-logo" src={freehitlogo} alt="" />
          </a>
          <a className="free-word " href="/about">Free-Hit</a>
        </h1>
      </div>
      <ul className="pages">
        <li><a href="/">Home</a></li>
        <li><a href="/bookmarks">Bookmarks</a></li>
      </ul>
    </nav>
  );
};

export default Aboutnav;
