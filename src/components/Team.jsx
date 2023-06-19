import con1 from '../assets/4.png'
import con2 from '../assets/1.png'
import con3 from '../assets/3.png'
import con4 from '../assets/coworking.png'
import { useNavigate } from 'react-router-dom'
import "../styles/Team.css"

const Team = () => {
  const navigate = useNavigate()
  return (
    <section className="team">
      <div className="center">
        <h1>Our Beloved contributors</h1>
      </div>

      <div className="team-content">
        <div className="box">
          <img src={con1} />
          <h4>Abhishek K</h4>
          <h5>Designer</h5>
          <hr />
          <div className="icons">
            <a href="https://twitter.com/bobsstwt" target="_blank">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="https://github.com/bobbyy16" target="_blank">
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-k-7597771ba/"
              target="_blank"
            >
              <i class="ri-linkedin-box-fill"></i>
            </a>
          </div>
        </div>
        <div className="box">
          <img src={con2} />
          <h4>Priyankar</h4>
          <h5>Developer</h5>
          <hr />
          <div className="icons">
            <a href="https://twitter.com/Priyankarpal" target="_blank">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="https://github.com/priyankarpal" target="_blank">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://www.linkedin.com/in/priyankarpal/" target="_blank">
              <i class="ri-linkedin-box-fill"></i>
            </a>
          </div>
        </div>

        <div className="box">
          <img src={con3} />
          <h4>Jason Dsouza</h4>
          <h5>Developer</h5>
          <hr />
          <div className="icons">
            <a href="https://twitter.com/_Jason_Dsouza" target="_blank">
              <i className="ri-twitter-fill"></i>
            </a>
            <a href="http://github.com/JasonDsouza212" target="_blank">
              <i className="ri-github-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jason-dsouza-130b421ba/"
              target="_blank"
            >
              <i class="ri-linkedin-box-fill"></i>
            </a>
          </div>
        </div>

        <div className="box" onClick={() => navigate('/community')}>
          <img src={con4} />
          <h4> Open-Source</h4>
          <h5>Community</h5>
          <hr />
          <div className="icons">
            <a
              href="https://github.com/JasonDsouza212/free-hit/graphs/contributors"
              target="_blank"
            >
              <i className="ri-github-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
