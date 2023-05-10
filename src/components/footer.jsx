const Footer = () => {
  return (
   <footer>
    <div className="footer-content">
        <h3><b>FREE-HIT</b></h3>
        <p>Find the tools you need without breaking the bank<br /> <b>Contact Us</b></p>
        <ul className="socials">
            <li><a target="_blank" href="https://twitter.com/_Jason_Dsouza"><i className="ri-twitter-fill"></i></a></li>
            <li><a target="_blank" href="https://github.com/JasonDsouza212"><i className="ri-github-fill"></i></a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/jason-dsouza-130b421ba/"><i className="ri-linkedin-fill"></i></a></li>
            <li><a target="_blank" href="mailto:jasondsouza212@gmail.com"><i className="ri-mail-fill"></i></a></li>
        </ul>
    </div>
    <div className="footer-bottom">
        <p>copyright &copy;2023 <b>Free-Hit</b><br />
        Maintained by <span className="maintainer"><a target="_blank" href="https://github.com/JasonDsouza212">Jason Dsouza</a></span></p><br />
        {/* <h4>Share it on socials <i className="ri-share-fill"></i></h4>
        <ul className="socials">
            <li><a href="#"><i className="ri-twitter-fill"></i></a></li>
            <li><a href="#"><i className="ri-github-fill"></i></a></li>
            <li><a href="#"><i className="ri-linkedin-fill"></i></a></li>
            <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
        </ul> */}
    </div>
</footer>
  )
}

export default Footer
