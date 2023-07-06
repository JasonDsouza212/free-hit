import freehitlogo from '../assets/footer-logo.png'
import "../styles/Footer.css"

const Footer = () => {
  // gettin year dynamically
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <div className="footer-content">
        <h3>
          <img className="free-logo-footer" src={freehitlogo} alt="logo" />
        </h3>
        <p>
          Find the tools you need without breaking the bank
        </p>
        <p>
          <b>Contact Us</b>
        </p>
        <ul className="socials">
          <li>
            <a 
              aria-label="Follow me on Facebook"
              title="Facebook (External Link)"
              rel="noopener noreferrer"
              target="_blank" 
              href="https://twitter.com/_Jason_Dsouza"
            >
              <i className="socials_twitter ri-twitter-fill"></i>
            </a>
          </li>
          <li>
            <a 
              aria-label="Follow me on Github"
              title="Github (External Link)"
              rel="noopener noreferrer"
              target="_blank" 
              href="https://github.com/JasonDsouza212"
            >
              <i className="socials_github ri-github-fill"></i>
            </a>
          </li>
          <li>
            <a
              aria-label="Follow me on Linkedin"
              title="Linkedin (External Link)"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/jason-dsouza-130b421ba/"
            >
              <i className="socials_linkedin ri-linkedin-fill"></i>
            </a>
          </li>
          <li>
            <a
              aria-label="Mail me on jasondsouza212@gmail.com"
              title="Mail (External Link)"
              rel="noopener noreferrer"
              target="_blank" 
              href="mailto:jasondsouza212@gmail.com"
            >
              <i className="socials_mail ri-mail-fill"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <br />
        <p>
          <span className='uppercase'>
            Copyright &copy; Free-Hit {year}
          </span>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <span>
            Maintained by &nbsp;
            <a target="_blank" href="https://github.com/JasonDsouza212" className='uppercase'>
              <b>Jason Dsouza</b>
            </a>
          </span>
        </p>
        <br />
      </div>
    </footer>
  )
}

export default Footer
