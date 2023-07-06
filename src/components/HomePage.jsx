import React from 'react'
import banner from '../assets/homepage.webp'
import { useContext } from 'react';
import { ToolContext } from '../App';
import "../styles/About.css"
import { NavLink } from 'react-router-dom';
import HomeCard from './Card/HomeCard';
import Card from '../DB/Card.json'
const HomePage = () => {
    const { darkMode } = useContext(ToolContext);

    return (
        <>
        <section className={`about about_container ${darkMode ? 'dark-mode' : ''}`}>
   <div className="ab1">
          <div className="ab-content">
          <p className={`text ${darkMode ? 'dark-mode' : ''}`} style={{lineHeight:1.5}}>
          Welcome to our website <strong className="bold">Free-Hit</strong> where you can access a 
          range of helpful free tools . Bookmark them if you like
            <br />
            <br />
            <button style={{lineHeight:1}}>
          <NavLink to="/about">More
                <strong>&#x2192;</strong>
                </NavLink>
            </button>
          </p>
          </div>
          <img src={banner} alt="banner" className={`image ${darkMode ? 'dark-mode' : ''}`}/>
        </div>
        </section>
        <section className='homeCard'>
        { Card.map((ele)=><HomeCard ele={ele} />
        ) }
        </section>
        </>
  )
}

export default HomePage