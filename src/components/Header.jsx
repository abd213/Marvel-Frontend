import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = (props) => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  //   console.log(props.home);
  if (props.home === true) {
    return (
      <header className={`header ${showNav ? "header-view" : "hide-header"}`}>
        <div className="responsive-header">
          <Link to="/">
            <img className="logo-round logo-principal" src={logo} alt="logo" />
          </Link>

          <label onClick={handleNav}>☰</label>
        </div>

        <nav>
          <div className={`button ${showNav ? "nav-view" : "hide-nav"}`}>
            <Link to="/">
              <button>Accueil</button>
            </Link>
            <Link to="/personnages">
              <button className="second-button">Personnages</button>
            </Link>
            <Link to="/comics">
              <button className="button-comics">Comics</button>
            </Link>
            <Link>
              <button>Favoris</button>
            </Link>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        <div className="header-home">
          <div>
            <img className="logo-round" src={logo} alt="logo" />
          </div>
        </div>
      </header>
    );
  }
};
export default Header;
