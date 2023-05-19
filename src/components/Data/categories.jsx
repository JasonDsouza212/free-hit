import React, { useContext, useState } from 'react';
import { ToolContext } from './App';

const ButtonLinks = [
  {
    id: 1,
    name: 'All',
    category: 'all',
    icon: 'ri-briefcase-line',
  },
  {
    id: 2,
    name: 'Remote Jobs',
    category: 'remote',
    icon: 'ri-remote-control-line',
  },
  {
    id: 3,
    name: 'Resume Builder',
    category: 'resume',
    icon: 'ri-clipboard-line',
  },
  {
    id: 4,
    name: 'AI',
    category: 'ai',
    icon: 'ri-robot-line',
  },
  {
    id: 5,
    name: 'Ethical Hacking',
    category: 'ethical',
    icon: 'ri-bug-line',
  },
  {
    id: 6,
    name: 'Movies | Series',
    category: 'movies',
    icon: 'ri-movie-2-line',
  },
  {
    id: 7,
    name: 'Extensions',
    category: 'extensions',
    icon: 'ri-chrome-line',
  },
  {
    id: 8,
    name: 'Useful Tools',
    category: 'tools',
    icon: 'ri-tools-fill',
  },
];

const Categories = () => {
  const { filterProduct } = useContext(ToolContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (category) => {
    filterProduct(category);
    setIsMenuOpen(false); // Close the side menu
  };

  return (
    <>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>Open/Close Menu</button>
      {isMenuOpen && (
        <ul className="side-menu">
          {ButtonLinks.map((button) => (
            <li key={button.id} onClick={() => handleMenuClick(button.category)}>
              <i className={button.icon}></i>
              {button.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export { Categories, ButtonLinks };
