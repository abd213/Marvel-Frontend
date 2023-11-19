import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bgcImg from "../assets/black-wallpaper.jpg";

const Accueil = ({ setHome }) => {
  // console.log(props);
  setHome(false);
  const navigate = useNavigate();

  return (
    <main
      className="wallpaper"
      style={{
        backgroundImage: `url(${bgcImg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="home-description">
        <div>
          <h1>UNIVERS MARVEL</h1>
          <p>
            Bienvenue sur notre site dédié à l'univers captivant de Marvel !
            Plongez dans un monde où des héros iconiques et des super-vilains
            redéfinissent la notion de puissance extraordinaire. Explorez une
            collection exhaustive de comics mettant en scène des personnages
            emblématiques tels que Spider-Man, Iron Man, Captain America et bien
            d'autres. Notre plateforme offre une expérience immersive où les
            passionnés de Marvel peuvent découvrir, apprécier et partager leur
            amour pour ces histoires époustouflantes. Que vous soyez un fan de
            longue date ou que vous découvriez cet univers pour la première
            fois, préparez-vous à être transporté dans des aventures épiques et
            à explorer l'étendue infinie de l'imagination Marvel.
          </p>
        </div>

        <div className="button-home">
          <button
            className=""
            onClick={() => {
              // setHome(true);
              navigate("/personnages");
            }}
          >
            Personnages
          </button>
          <Link to={"/comics"}>
            <button>Comics</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Accueil;
