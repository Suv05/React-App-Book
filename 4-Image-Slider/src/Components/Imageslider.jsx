import { useState, useEffect } from "react";
import Spinner from "./Spinner";

function Image({ url }) {
  const [img, setImg] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const response = await fetch(`https://${url}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setImg(data);
        setLoading(false);
      } catch (e) {
        console.error("Fetch error:", e);
        setError(e);
        setLoading(false);
      }
    };
    fetchImg();
  }, [url]);

  if (loading) {
    return (
      <center>
        <Spinner />
      </center>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handelLeftArrow = () => {
    setCurrentSlide(currentSlide === 0 ? img.length - 1 : currentSlide - 1);
  };
  const handelRightArrow = () => {
    setCurrentSlide(currentSlide === img.length - 1 ? 0 : currentSlide + 1);
  };

  const handelIndicator = (getIndex) => {
    setCurrentSlide(getIndex);
  };

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          {img.map((image, index) => (
            <button
              key={image.id}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={currentSlide === index ? "active" : ""}
              onClick={() => handelIndicator(index)}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {img.map((image, index) => (
            <div
              key={image.id}
              className={`carousel-item ${
                currentSlide === index ? "active" : ""
              }`}
            >
              <img
                src={image.download_url}
                className="d-block w-100"
                alt={image.author}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          onClick={handelLeftArrow}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          onClick={handelRightArrow}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Image;
