import TWITTER from "../images/twitter-circled.png";
import GITHUB from "../images/github-circled.png";

function header() {
  return (
    <header className="title-bar">
      <h1>🔥 FREE-HIT</h1>
      <ul className="nav-links">
        <li>
          <a
            className="nav-link"
            href="https://github.com/JasonDsouza212/free-hit"
            target="_blank"
            rel="noreferrer"
          >
            <img className="header-img" src= {GITHUB}/>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/_Jason_Dsouza"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            <img className="header-img" src= {TWITTER}/>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default header;
