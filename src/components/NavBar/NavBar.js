import "./NavBar.css";
import logo from "./LogoVoltRosetoPurple.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/menu-close.svg";
import { ReactComponent as MenuIcon } from "../assets/menu-open.svg";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar-container">
      <div className="navlogo-container">
        <Link to="/">
          <img src={logo} alt="logo" className="navlogo" />
        </Link>
      </div>
      <ul className={click ? "navmenu-container-off" : "navmenu-container"}>
        <Link to="/">
          <li className="navoption" onClick={closeMobileMenu}>
            Home
          </li>
        </Link>
        <Link to="/chi-siamo">
          <li className="navoption" onClick={closeMobileMenu}>
            Chi siamo
          </li>
        </Link>
        <Link to="/membri">
          <li className="navoption" onClick={closeMobileMenu}>
            Membri
          </li>
        </Link>
        <Link to="/progetti">
          {" "}
          <li className="navoption" onClick={closeMobileMenu}>
            Progetti
          </li>
        </Link>
        <Link to="/unisciti">
          <li className="unisciti" onClick={closeMobileMenu}>
            Unisciti
          </li>
        </Link>
      </ul>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
