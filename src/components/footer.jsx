import { GitHub, Twitter } from './Icons'

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
        {FooterLinks.map(({ id, link, name, icon }) => (
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


const FooterLinks = [
  {
    id: 1,
    link: "",
    name: "GitHub",
    icon: <GitHub />,
  },
  {
    id: 2,
    link: "",
    name: "Twitter",
    icon: <Twitter />,
  },
]