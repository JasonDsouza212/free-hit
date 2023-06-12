import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Navigation</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
