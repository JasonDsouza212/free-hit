import React, { useState, useEffect, useContext } from 'react';
import { Element } from 'react-scroll';
import banner1 from '../assets/designer-desk-2.webp';
import banner2 from '../assets/business-presentation-1.webp';
import Team from '../components/Team';
import Header from '../components/Navbar';
import Loader from '../components/Loader';
import "../styles/About.css";
import { ToolContext } from '../App';

const About = () => {
  const { darkMode } = useContext(ToolContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.classList.add('animated');
        } else {
          element.classList.remove('animated');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className={`about_container ${darkMode ? 'dark-mode' : ''}`}>
      <Header />
      {!isLoading ? (
        <section className={`about ${darkMode ? 'dark-mode' : ''}`}>
          <div className="ab1">
            <Element className="ab-content animate fade-in slide-up" name="paragraph1" id="paragraph1">
              <p className={`text ${darkMode ? 'dark-mode' : ''} `}>
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
            </Element>
            <img src={banner1} alt="banner" className={`image ${darkMode ? 'dark-mode' : ''} animate fade-out slide-up`} />
          </div>
          <div className="ab2">
            <img src={banner2} alt="banner" className={`image ${darkMode ? 'dark-mode' : ''} animate fade out slide-up`} />
            <Element className="ab-content animate fade-in slide-up scale-in" name="paragraph2" id="paragraph2">
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
            </Element>
          </div>
        </section>
      ) : (
        <div className="loader">
          <Loader />
        </div>
      )}
      <Team />
    </div>
  );
}

export default About;
