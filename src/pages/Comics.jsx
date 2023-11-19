import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import bgcComics from "../assets/black-panthere.png";
import notImg from "../assets/point-dintero.png";

const Comics = ({ setHome }) => {
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
          `https://site--backend-marvel--xxx6qfsmx2j6.code.run/comics?title=${search}&skip=${offset}`
        );
        console.log(response.data);
        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [search, offset]);

  return (
    <div
      style={{
        backgroundImage: `url(${bgcComics})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      {isLoading ? (
        <div>Chargement...</div>
      ) : (
        <div>
          <div className="input-search">
            <input
              type="search"
              // value={search}
              placeholder="Ex: Avengers, Iron Man..."
              onChange={(event) => {
                setSearch(event.target.value);
                console.log(event.target.value);
              }}
            />
          </div>
          <Carousel autoPlay showIndicators={false} showThumbs={false}>
            {data.results.map((comic) => {
              return (
                <article key={comic._id} className="container container-comics">
                  <div className="comics-left-part">
                    {comic.thumbnail.path !==
                    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
                      <img
                        className="img-comic"
                        src={
                          comic.thumbnail.path + "." + comic.thumbnail.extension
                        }
                        alt="comic"
                      />
                    ) : (
                      <img src={notImg} />
                    )}
                  </div>
                  <div className="comics-right-part">
                    <h2>{comic.title}</h2>
                    <p>{comic.description}</p>
                  </div>
                </article>
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

export default Comics;
