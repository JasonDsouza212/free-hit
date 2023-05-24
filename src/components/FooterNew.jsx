import '../styles/FooterNew.css'

const FooterNew = () => {
  return (
    <div className="footerNew">
      <div className="footer_left">
        <p>
          copyright &copy;2023 <b>Free-Hit</b>
          <br />
          Maintained by{' '}
          <span className="maintainer">
            <a target="_blank" href="https://github.com/JasonDsouza212">
              Jason Dsouza
            </a>
          </span>
        </p>
        <br />
      </div>
      <div className="footer_middle">
        <h3>
          <b>FREE-HIT</b>
        </h3>
        <p>
          Find the tools you need without breaking the bank
          <br />
        </p>
      </div>
      <div className="footer_right">
        <b>Contact Us</b>
        <ul className="social_icon">
          <li>
            <a target="_blank" href="https://twitter.com/_Jason_Dsouza">
              <i className="ri-twitter-fill"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/JasonDsouza212">
              <i className="ri-github-fill"></i>
            </a>
          </li>
          <li>
            <a
              className="third_social"
              target="_blank"
              href="https://www.linkedin.com/in/jason-dsouza-130b421ba/"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:jasondsouza212@gmail.com">
              <i className="ri-mail-fill"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FooterNew
