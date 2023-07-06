import React from 'react'
import '../../styles/HomeCard.css'

import { useRef } from 'react'
import { useContext } from 'react';
import { ToolContext } from '../../App';

const HomeCard = (props) => {

    const {url,title,des,btn,href}=props.ele
    const {darkMode}=useContext(ToolContext)
    const Article=useRef();
    
  return (
    <article ref={Article} className={darkMode ? 'dark-mode' : ''} >
      <figure>
        <img
        className= {`image ${darkMode ? 'dark-mode' : ''}`}
          alt="A rather marvellous macaw, opening one of its wings to support the cause."
          src={url}
        />
      </figure>

      <div>
      <h3 className={`card-title ${darkMode ? 'dark-mode' : ''}`}>{title}</h3>
      <p className={`card-description ${darkMode ? 'dark-mode' : ''}`}>{des}</p>

        {/* <a href={href} target='_blank' className="btn">{btn}</a> */}
      </div>
    </article>
  )
}

export default HomeCard