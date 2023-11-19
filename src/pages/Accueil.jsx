import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgcImg from "../assets/black-wallpaper.jpg";

const Accueil = () => {
  // console.log(props);
  // setHome(false);
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
          <h1>MARVEL</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error
            ducimus voluptatem dolorum, reiciendis impedit ex fuga ad illo,
            maiores tempora commodi suscipit aperiam veniam harum mollitia
            deserunt ea eaque. Cupiditate, consectetur beatae in maxime vero
            eveniet doloribus obcaecati atque qui quas reprehenderit ex mollitia
            fugiat totam sunt veniam. Consequatur temporibus consectetur ab
            voluptate ipsam veritatis quo cum, atque eius.
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
          <button>Comics</button>
        </div>
      </div>
    </main>
  );
};

export default Accueil;
