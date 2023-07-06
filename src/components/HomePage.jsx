import React from 'react'
import banner from '../assets/homepage.webp'
import { useContext } from 'react';
import { ToolContext } from '../App';
import "../styles/About.css"
import HomeCard from './Card/HomeCard';
import Card from '../DB/Card.json'
const HomePage = () => {
    const { darkMode } = useContext(ToolContext);

    return (
        <>
        <section className={`about ${darkMode ? 'dark-mode' : ''}`}>
   <div className="ab1">
          <div className="ab-content">
          <p className={`text ${darkMode ? 'dark-mode' : ''}`} style={{lineHeight:1.5}}>
          Welcome to our website <strong className="bold">Free-Hit</strong> where you can access a 
          range of helpful free tools . Bookmark them if you like
            <br />
            <br />
            <button style={{lineHeight:1}}>
              <a href="https://github.com/JasonDsouza212/free-hit" target='_blank'>
                More <strong>&#x2192;</strong>
              </a>
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