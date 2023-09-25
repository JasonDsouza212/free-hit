import freehitlogo from '../assets/footer-logo.webp'
import { NavLink } from "react-router-dom"
import "../styles/Footer.css"

const Footer = () => {
  // getting year dynamically
  const date = new Date();
  const year = date.getFullYear();

  // to add social links
  const socialLinks = [
    {
      label: 'Twitter',
      iconClass: 'socials_twitter ri-twitter-fill',
      url: 'https://twitter.com/_Jason_Dsouza',
    },
    {
      label: 'GitHub',
      iconClass: 'socials_github ri-github-fill',
      url: 'https://github.com/JasonDsouza212',
    },
    {
      label: 'LinkedIn',
      iconClass: 'socials_linkedin ri-linkedin-fill',
      url: 'https://www.linkedin.com/in/jason-dsouza-130b421ba/',
    },
    {
      label: 'Email',
      iconClass: 'socials_mail ri-mail-fill',
      url: 'mailto:jasondsouza212@gmail.com',
    },
  ];
  return (
    <footer>
      <div className="footer-content">
        <h3>
          <NavLink to="/about">
            <img className="free-logo-footer" src={freehitlogo} alt="logo" />
          </NavLink>
        </h3>
        <p>Find the tools you need without breaking the bank</p>
        <p>Contact Us</p>
        <ul className="socials">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                aria-label={`Follow me on ${link.label}`}
                rel="noopener noreferrer"
                target="_blank"
                href={link.url}
              >
                <i className={link.iconClass}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-bottom">
        <br />
        <p>
          <span className="uppercase">Copyright &copy; Free-Hit {year}</span>
          &nbsp;&nbsp; | &nbsp;&nbsp;
          <span>
            Maintained by&nbsp;
            <a href="https://github.com/JasonDsouza212" className="uppercase">
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
