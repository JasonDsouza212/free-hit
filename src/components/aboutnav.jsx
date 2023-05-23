import freehitlogo from '../images/free-logo.png'
import TwitterButton from './message/twitterbutton'

const Aboutnav = () => {
  const msg = `Hey guys, I found a cool project!

Check out Free-Hit🏏, an open-source App for discovering free and helpful tools that cater to our needs
    
It's a one-stop solution for finding amazing resources
   
Don't forget to give it a⭐️and explore it on GitHub 
https://github.com/JasonDsouza212/free-hit`

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="wrapper">
          <input type="checkbox" id="btn" hidden />
          <label htmlFor="btn" className="menu-btn">
            <i className="fa ri-menu-fill"></i>
            <i className="fa ri-close-line"></i>
          </label>
          <nav id="sidebar">
          <ul className="list-items">
            <li>
              <a href="/">
                <i className="ri-home-4-fill"></i> Home
              </a>
            </li>
            <li>
              <a href="/bookmarks">
                <i className="ri-bookmark-fill"></i> Bookmarks
              </a>
            </li>
            <li>
              <TwitterButton message={msg} />
            </li>
          </ul>

          </nav>
        </div>
        <h1 className="Free-Hit">
          <a href="/about">
            <img className="free-logo" src={freehitlogo} alt="" />
          </a>
          <a className="free-word " href="/about">
            Free-Hit
          </a>
        </h1>
      </div>
      <ul className="pages">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/bookmarks">Bookmarks</a>
        </li>
      </ul>
    </nav>
  )
}

export default Aboutnav
