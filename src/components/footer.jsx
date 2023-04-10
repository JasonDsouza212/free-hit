import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p>
          Crafted with ❤️ by
          <a
            href="https://github.com/JasonDsouza212/free-hit"
            target="_blank"
            className="footer-link"
            rel="noreferrer"
          >
            {' '}
            Jason Dsouza
          </a>
        </p>
      </div>
      <ul className="fot-links">
        <li>
          <a
            href="https://github.com/JasonDsouza212"
            target="_blank"
            rel="noreferrer"
            className="fot-link"
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: '#fff' }} /> 
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/_Jason_Dsouza"
            target="_blank"
            rel="noreferrer"
            className="fot-link"
          >
            <FontAwesomeIcon icon={faTwitter} style={{ color: '#fff' }} />{' '}
            Twitter
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
