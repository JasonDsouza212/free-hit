import banner1 from '../assets/designer-desk-2.webp'
import banner2 from '../assets/business-presentation-1.webp'
import Team from '../components/Team'
import Header from '../components/Navbar'
import "../styles/About.css"
import { useContext } from 'react';
import { ToolContext } from '../App';


const About = () => {
  const { darkMode } = useContext(ToolContext);
  return (
    <div className={`about_container ${darkMode ? 'dark-mode' : ''}`}>
      {/* <Aboutnav /> */}
      <Header />
      <section className={`about ${darkMode ? 'dark-mode' : ''}`}>
        <div className="ab1">
          <div className="ab-content">
          <p className={`text ${darkMode ? 'dark-mode' : ''}`}>
            <strong className="bold">Free-Hit</strong> is an application that is
            used to search for <b>free tools</b> that are both free and helpful
            for our needs. It is built by the amazing <b>open-source</b>{' '}
            community.
            <br />
            <br />
            <button>
              <a href="https://github.com/JasonDsouza212/free-hit" target='_blank'>
                Star the repo <strong>★</strong>
              </a>
            </button>
          </p>
          </div>
          <img src={banner1} alt="banner" className={`image ${darkMode ? 'dark-mode' : ''}`}/>
        </div>
        <div className="ab2">
          <img src={banner2} alt="banner" className={`image ${darkMode ? 'dark-mode' : ''}`}/>
          <p className={`text ${darkMode ? 'dark-mode' : ''}`}>
            Great things are never created in isolation. Thanks to our amazing{' '}
            <b>Contributors</b>, we've brought this product to life. And with
            your help, we can continue to make it even better. If you're a{' '}
            <b>Developer</b> or a <b>Tech enthusiast</b>, you can help us create
            a better experience for everyone. We are excited to hear your
            thoughts and ideas.
            <br />
            <br />
            <button>
              <a href="https://github.com/JasonDsouza212/free-hit/blob/main/CONTRIBUTING.md" target='_blank'>
                Learn more <strong>➜</strong>
              </a>
            </button>
          </p>
        </div>
      </section>
      <Team />
    </div>
  )
}

export default About
