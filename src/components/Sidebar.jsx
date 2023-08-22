
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import TwitterButton from './TwitterButton';
import { msg } from '../utils/data/message';
import ButtonLinks from '../utils/data/categories';
import { useContext, useEffect, useState } from 'react';
import { ToolContext } from '../App';

export default function Sidebar({search}) {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab,setActiveTab] = useState("");
  let filters =
    searchParams.getAll('filters').length > 0
      ? searchParams.getAll('filters')
      : ['all'];
  filters = filters[0].split(',');

  const { darkMode } = useContext(ToolContext);


  const handleAddFilter = (filter, event) => {
    search("");
    filter = filter.toLowerCase();
    setSearchParams((prevParams) => {
      prevParams.delete('q');
      prevParams.delete('page');
      let options = prevParams.getAll('filters') || [];
      if (options.length > 0) {
        options = options[0].split(',');
      }
      if (options.includes(filter)) {
        if (options.length > 1) {
          prevParams.set(
            'filters',
            [...options].filter((f) => f !== filter)
          );
        } else {
          prevParams.delete('filters');
        }
      } else {
        if (event.ctrlKey) {
          prevParams.set('filters', [
            ...prevParams.getAll('filters'),
            filter,
          ]);
        } else {
          prevParams.set('filters', filter);
        }
      }
      return prevParams;
    });
    // document.getElementById("btn").checked = false;
  };
  
  useEffect(()=>{
    let currentTab = location.search.slice(location.search.indexOf("=")+1);
    setActiveTab(currentTab)
  },[location.search])

  return (
    <div className={`wrapper ${darkMode ? 'dark-mode' : ''}`}>
      <input type="checkbox" id="btn" hidden />
      <label htmlFor="btn" className={`menu-btn ${darkMode ? 'dark-mode' : ''}`}>
        <i className="fa ri-menu-fill"></i>
        <i className="fa ri-close-line"></i>
      </label>
      {location.pathname === '/about' || location.pathname === '/community' ? (
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
                <NavLink
                  to="/"
                  className={darkMode ? 'dark-mode' : ''}
                  activeclassname="active"
                >
                  <i className="ri-home-4-fill"></i> Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bookmarks"
                  className={darkMode ? 'dark-mode' : ''}
                  activeclassname="active"
                >
                  <i className="ri-bookmark-fill"></i> Bookmark
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="list-items sidebarfilters">
            {ButtonLinks.map((buttonLink) => (
              <>
              <li
                key={buttonLink.id}
                className={activeTab == buttonLink.category
                    ? 'active-filter'
                    : ''
                }
              >
                <button 
					          className={darkMode ? 'dark-mode' : ''}
                  	onClick={(e) => handleAddFilter(buttonLink.category, e)}
                >
                  {buttonLink.name}
                </button>
              </li>
              </>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
