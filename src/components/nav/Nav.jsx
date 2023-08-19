import "./Nav.css";

function Nav() {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="nav_title">Where in the world?</h1>
        <div className="nav_dark_mode">
          <i className="uil uil-moon icon_dark"></i>
          Dark Mode
        </div>
      </nav>
    </header>
  );
}

export default Nav;
