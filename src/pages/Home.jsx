import React, { useContext, useEffect, useState } from 'react';
import { ToolContext } from '../App';
import noresultimg from '../assets/sad-face-2.png';
import GridView from '../components/Card/GridView';
import ListView from '../components/Card/ListView';
import { BsFillGridFill, BsListUl } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import '../styles/Home.css';
import { useSearchParams, Navigate } from 'react-router-dom';
import checkFilter from '..//utils/check_filters';
import Loader from '../components/Loader';
import Header from '../components/Navbar';

const Card = ({ length }) => {
  const { gridView, setGridView } = useContext(ToolContext);
  const [darkMode, setDarkMode] = useState(false);

  const [searchParams] = useSearchParams();
  let filters = searchParams.get('filters') || 'all';
  filters = filters.split(',');
  if (checkFilter(filters)) return <Navigate to="/notfound" />;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark-mode', darkMode);
    root.style.setProperty('--background-color', darkMode ? '#212121' : '#ffffff');
    root.style.setProperty('--text-color', darkMode ? '#ffffff' : '#212121');
  }, [darkMode]);

  return (
    <div>
      <Header />
      <div className="card_container">
        <div className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          <FaMoon className={`dark-mode-icon ${darkMode ? 'dark-mode-active' : ''}`} />
        </div>
        <div className={`card_view ${darkMode ? 'dark-mode' : ''}`}>
          <BsFillGridFill
            onClick={() => setGridView(true)}
            size={22}
            color={gridView ? '#212121' : '#9E9E9E'}
          />
          <FaMoon
            className={`dark-mode-icon ${darkMode ? 'dark-mode-active' : ''}`}
            onClick={() => setDarkMode(!darkMode)}
            size={22}
            color={darkMode ? '#9E9E9E' : '#212121'}
          />
          <BsListUl
            onClick={() => setGridView(false)}
            size={28}
            color={gridView ? '#9E9E9E' : '#212121'}
          />
        </div>
        <div className="card-container">
          {!isLoading ? (
            length === 0 ? (
              <div className="not-found-wrapper">
                <p className="no-results">Sorry, our toolbox seems empty for this search term!</p>
                <img className="not-found-img" src={noresultimg} alt="not found" />
              </div>
            ) : gridView ? (
              <GridView filters={filters} />
            ) : (
              <ListView filters={filters} />
            )
          ) : (
            <div className="loader">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
