import React,{useContext} from 'react';
import { FaSearch } from 'react-icons/fa';
import freehitlogo from '../images/free-logo.png';
import Button from './Button';
import ButtonLinks from './Data/categories';
import { ToolContext } from '../App';

const Header = () => {
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
            <div className="title">
              <ul className="pages-sidebar">
                <li><a href="/"><i className="ri-home-4-fill"></i>Home</a></li>
                <li><a href="/bookmarks"><i className="ri-bookmark-fill"></i>Bookmark</a></li>
              </ul>
            </div>
            <ul className="list-items">
              {ButtonLinks.map(buttonLink => (
                <Button key={buttonLink.id} button={buttonLink} filterProduct={filterProduct} />
              ))}
            </ul>
          </nav>
        </div>
        <h1 className="Free-Hit">
          <a href="/about">
            <img className="free-logo" src={freehitlogo} alt="" />
          </a>
          <a className="free-word" href="/about">Free-Hit</a>
        </h1>
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
                setSearchTerm('');
              }}
            />
          )}
          <div className="btn btn_common">
            <i className="fas fa-search"><FaSearch /></i>
          </div>
        </div>
        {filteredSuggestions.length > 0 && (
          <ul className="hnav-suggestionbar" id='serch-suggestions'>
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
        <li><a href="/">Home</a></li>
        <li><a href="/bookmarks">Bookmarks</a></li>
      </ul>
    </nav>
  );
};

export default Header;
