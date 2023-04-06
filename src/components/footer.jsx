import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p>
          Crafted with ❤️ by
          <a
            href="https://github.com/JasonDsouza212"
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
            🐈‍⬛ GitHub
          </a>
        </li>
        <li>
          <a
            href="https://github.com/JasonDsouza212/free-hit"
            target="_blank"
            rel="noreferrer"
            className="fot-link"
          >
            🐦 Twitter
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer
