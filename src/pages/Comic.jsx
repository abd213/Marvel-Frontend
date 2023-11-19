import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        const response = await axios.get(`http://localhost:3004/comics/${id}`);
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
    <div>
      <h1>Les Comics de {data.name}</h1>
      <div>
        <Carousel showThumbs={false}>
          {data.comics.map((comic) => {
            return (
              <article className="container" key={comic._id}>
                <div className="character-left-part">
                  <img
                    className="img-comic"
                    src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                    alt="comics"
                  />
                </div>
                <div className="character-right-part">
                  <h2>{comic.title}</h2>
                  <p>{comic.description}</p>
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
