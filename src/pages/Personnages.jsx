import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Personnages.css";
import venom from "../assets/venom.png";

const Personnages = ({ setHome }) => {
  // console.log(setHome);
  setHome(true);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3004/personnages?name=${search}&skip=${offset}`
        );
        // console.log(response.data);
        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search, offset]);
  console.log(data);
  return (
    <div
      style={{
        backgroundImage: `url(${venom})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      {isLoading ? (
        <div>Chargement...</div>
      ) : (
        <div>
          {/* <h1>Les Personnages Marvel</h1> */}
          <div className="input-search">
            <input
              type="text"
              // value={search}
              placeholder="Ex: Avengers, Iron Man..."
              onChange={(event) => {
                setSearch(event.target.value);
                console.log(event.target.value);
              }}
            />

            <span class="lnr lnr-magnifier"></span>
          </div>
          <Carousel
            className="veve"
            showIndicators={false}
            showThumbs={false}
            autoPlay
            interval={4000}
            infiniteLoop
          >
            {data.results.map((character) => {
              return (
                <Link to={`/comics/${character._id}`} key={character._id}>
                  <article
                    className="container character-card"
                    key={character._id}
                  >
                    <div className="character-left-part">
                      <img
                        className="character-img"
                        src={
                          character.thumbnail.path +
                          "." +
                          character.thumbnail.extension
                        }
                        alt="character"
                      />
                    </div>

                    <div className="character-right-part">
                      <h2>{character.name}</h2>
                      <p>{character.description}</p>
                    </div>
                  </article>
                  {/* <div className="fav-icon">
                    <img className="fav-icon" src={favIcon} alt="" />
                  </div> */}
                </Link>
              );
            })}
          </Carousel>
          <div className="button-offset">
            <button
              onClick={(event) => {
                if (offset > 0) {
                  event.preventDefault();
                  let newOffset = offset - 100;
                  setOffset(newOffset);
                  setPage(page - 1);
                }
              }}
            >
              <span class="lnr lnr-arrow-left-circle"></span>
            </button>
            <span className="page">P.{page}</span>
            <button
              onClick={(event) => {
                event.preventDefault();
                let newOffset = offset + 100;
                setOffset(newOffset);
                setPage(page + 1);
              }}
            >
              <span class="lnr lnr-arrow-right-circle"></span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Personnages;
