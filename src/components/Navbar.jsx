import logo from '../assets/images/logov3.png'
import PageLinks from "./PageLinks";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars" />
            </button>
          </div>
          <PageLinks parentClass='nav-links' itemClass='nav-link' />
        </div>
      </nav>
    </div>

  );
};

export default Navbar;
