import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  //   console.log(props.home);
  if (props.home === true) {
    return (
      <header className="header">
        <img className="logo-round" src={logo} alt="logo" />
        <div className="button">
          <Link to="/">
            <button>Accueil</button>
          </Link>
          <Link to="/personnages">
            <button className="second-button">Personnages</button>
          </Link>
          <Link to="/comics">
            <button>Comics</button>
          </Link>

          <button>Favoris</button>
        </div>
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
