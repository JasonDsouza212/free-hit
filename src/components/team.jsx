import con1 from "../images/4.png";
import con2 from "../images/1.png";
import con3 from "../images/3.png";
import con4 from "../images/coworking.png";

const Team = () => {
  return (
    <section classname="team">
      <div classname="center">
        <h1>Our Beloved contributors</h1>
      </div>

      <div classname="team-content">
        <div classname="box">
          <img src={con1} />
          <h3>Abshiek k</h3>
          <h5>Designer</h5>
          <div classname="icons">
            <a href="https://twitter.com/bobsstwt"><i classname="ri-twitter-fill"></i></a>
            <a href="https://github.com/bobbyy16"><i classname="ri-github-fill"></i></a>
            <a href="https://www.linkedin.com/in/abhishek-k-7597771ba/"><i classname="ri-linkedin-fill"></i></a>
          </div>
        </div>

        <div classname="box">
          <img src={con2} />
          <h3>Priyankar</h3>
          <h5>Developer</h5>
          <div classname="icons">
            <a href="https://twitter.com/Priyankarpal"><i classname="ri-twitter-fill"></i></a>
            <a href="https://github.com/priyankarpal"><i classname="ri-github-fill"></i></a>
            <a href="https://www.linkedin.com/in/priyankarpal/"><i classname="ri-linkedin-fill"></i></a>
          </div>
        </div>

        <div classname="box">
          <img src={con3} />
          <h3>Jason Dsouza</h3>
          <h5>Developer</h5>
          <div classname="icons">
            <a href="https://twitter.com/_Jason_Dsouza"><i classname="ri-twitter-fill"></i></a>
            <a href="http://github.com/JasonDsouza212"><i classname="ri-github-fill"></i></a>
            <a href="https://www.linkedin.com/in/jason-dsouza-130b421ba/"><i classname="ri-linkedin-fill"></i></a>
          </div>
        </div>

        <div classname="box">
          <img src={con4} />
          <h3> Open-Source</h3>
          <h5>Community</h5>
          <div classname="icons">
            <a href="https://github.com/JasonDsouza212/free-hit/graphs/contributors"><i classname="ri-github-fill"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
