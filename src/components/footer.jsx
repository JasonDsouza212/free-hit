import { GitHub, Twitter } from './Icons'


const footerLinks = [
  {
    id: 1,
    link: "https://github.com/JasonDsouza212",
    name: "GitHub",
    icon: <GitHub />,
  },
  {
    id: 2,
    link: "https://twitter.com/_Jason_Dsouza",
    name: "Twitter",
    icon: <Twitter />,
  },
]

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
        {footerLinks.map(({ id, link, name, icon }) => (
          <li key={id}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="fot-link"
            >
              {icon}
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer
