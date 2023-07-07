import con1 from '../assets/4.webp'
import con2 from '../assets/1.webp'
import con3 from '../assets/3.webp'
import con4 from '../assets/coworking.webp'
import { useNavigate } from 'react-router-dom'
import "../styles/Team.css"
import { useContext } from 'react';
import { ToolContext } from '../App';

const Team = () => {
  const { darkMode } = useContext(ToolContext);
  const navigate = useNavigate()
  return (
    <section className={`team ${darkMode ? 'dark-mode' : ''}`}>
      <div className="center">
        <h1 className={darkMode ? 'dark-mode' : ''}
                  activeclassname="active">Our Beloved contributors</h1>
      </div>

      <div className={`team-content ${darkMode ? 'dark-mode' : ''}`}>
        <div className={`box ${darkMode ? 'dark-mode' : ''}`}>
          <img src={con1} className={`image ${darkMode ? 'dark-mode' : ''}`}/>
          <h3 className={darkMode ? 'dark-mode' : ''}
                  activeclassname="active">Abhishek K</h3>
          <h5 className={darkMode ? 'dark-mode' : ''}
                  activeclassname="active">Designer</h5>
          <div className={`icons ${darkMode ? 'dark-mode' : ''}`}>
            <a 
              aria-label="Follow me on Twitter"
              title="Twitter (External Link)"
              rel="noopener noreferrer"
              href="https://twitter.com/bobsstwt" 
              target="_blank"
            >
              <i className={`ri-twitter-fill ${darkMode ? 'dark-mode' : ''}`}></i>
            </a>
            <a
              aria-label="Follow me on Github"
              title="Github (External Link)"
              rel="noopener noreferrer"
              href="https://github.com/bobbyy16" 
              target="_blank"
            >
              <i className={`ri-github-fill ${darkMode ? 'dark-mode' : ''}`}></i>
            </a>
            <a
              aria-label="Follow me on Linkedin"
              title="Linkedin (External Link)"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/abhishek-k-7597771ba/"
              target="_blank"
            >
              <i className={`ri-linkedin-fill ${darkMode ? 'dark-mode' : ''}`}></i>
            </a>
          </div>
        </div>

        <div className={`box ${darkMode ? 'dark-mode' : ''}`}>
          <img src={con2} className={`image ${darkMode ? 'dark-mode' : ''}`}/>
          <h3 className={darkMode ? 'dark-mode' : ''}
                  activeclassname="active">Priyankar</h3>
          <h5 className={darkMode ? 'dark-mode' : ''}
                  activeclassname="active">Developer</h5>
          <div className="icons">
            <a 
              aria-label="Follow me on Twitter"
              title="Twitter (External Link)"
              rel="noopener noreferrer"
              href="https://twitter.com/Priyankarpal" 
              target="_blank"
            >
              <i className={`ri-twitter-fill ${darkMode ? 'dark-mode' : ''}`}></i>
            </a>
            <a 
              aria-label="Follow me on Github"
              title="Github (External Link)"
              rel="noopener noreferrer"
              href="https://github.com/priyankarpal" 
              target="_blank"
            >
              <i className={`ri-github-fill ${darkMode ? 'dark-mode' : ''}`}></i>
            </a>
            <a 
              aria-label="Follow me on Linkedin"
              title="Linkedin (External Link)"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/priyankarpal/" 
              target="_blank"
            >
              <i className={`ri-linkedin-fill ${darkMode ? 'dark-mode' : ''}`}></i>
            </a>
          </div>
        </div>

        <div className={`box ${darkMode ? 'dark-mode' : ''}`}>
          <img src={con3} className={`image ${darkMode ? 'dark-mode' : ''}`}/>
          <h3 className={darkMode ? 'dark-mode' : ''}
                  activeclassname="active">Jason Dsouza</h3>
          <h5 className={darkMode ? 'dark-mode' : ''}
                  activeclassname="active">Developer</h5>
          <div className="icons">
            <a 
              aria-label="Follow me on Twitter"
              title="Twitter (External Link)"
              rel="noopener noreferrer"
              href="https://twitter.com/_Jason_Dsouza" 
              target="_blank"
            >
              <i className={`ri-twitter-fill ${darkMode ? 'dark-mode' : ''}`}></i>
            </a>
            <a 
              aria-label="Follow me on Github"
              title="Github (External Link)"
              rel="noopener noreferrer"
              href="http://github.com/JasonDsouza212" 
              target="_blank"
            >
              <i className={`ri-github-fill ${darkMode ? 'dark-mode' : ''}`}></i>
            </a>
            <a
              aria-label="Follow me on Linkedin"
              title="Linkedin (External Link)"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jason-dsouza-130b421ba/"
              target="_blank"
            >
              <i className={`ri-linkedin-fill ${darkMode ? 'dark-mode' : ''}`}></i>
            </a>
          </div>
        </div>

        <div className={`box ${darkMode ? 'dark-mode' : ''}`} onClick={() => navigate('/community')}>
          <img src={con4} className={`image ${darkMode ? 'dark-mode' : ''}`}/>
          <h3 className={darkMode ? 'dark-mode' : ''}
                  activeclassname="active"> Open-Source</h3>
          <h5 className={darkMode ? 'dark-mode' : ''}
                  activeclassname="active">Community</h5>
          <div className="icons">
            <a
              href="https://github.com/JasonDsouza212/free-hit/graphs/contributors"
              target="_blank"
            >
              <i className={`ri-github-fill ${darkMode ? 'dark-mode' : ''}`}></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
