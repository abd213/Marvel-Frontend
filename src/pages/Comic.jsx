import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import spider from "../assets/spider-man.png";
import notImg from "../assets/point-dintero.png";

const Comic = ({ home, setHome }) => {
  // console.log(home);
  setHome(true);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const id = params.characterId;
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--xxx6qfsmx2j6.code.run/comics/${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Chargement...</div>
  ) : (
    <div
      style={{
        backgroundImage: `url(${spider})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <h1>Les Comics de {data.name}</h1>
      <div>
        <Carousel showThumbs={false}>
          {data.comics.map((comic) => {
            return (
              <article className="container" key={comic._id}>
                <div className="character-left-part">
                  {comic.thumbnail.path !==
                  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? (
                    <img
                      className="img-comic"
                      src={
                        comic.thumbnail.path + "." + comic.thumbnail.extension
                      }
                      alt="comics"
                    />
                  ) : (
                    <img src={notImg} />
                  )}
                </div>
                <div className="character-right-part">
                  <h2>{comic.title}</h2>
                  <p className="description-comic">{comic.description}</p>
                </div>
              </article>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Comic;
