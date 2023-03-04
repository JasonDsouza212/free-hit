function header() {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="home" className="brand-logo">Free-Hit</a>
          <a href="home" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://github.com/JasonDsouza212">Github</a></li>
            <li><a href="https://twitter.com/_Jason_Dsouza">twitter</a></li>
          </ul>
        </div>
      </nav>   
      <ul class="sidenav" id="mobile-demo">
        <li><a href="https://github.com/JasonDsouza212">Github</a></li>
        <li><a href="https://twitter.com/_Jason_Dsouza">twitter</a></li>
      </ul>
      $(document).ready(function(){
      $('.sidenav').sidenav()
      });
    </>
  );
}

export default header;

