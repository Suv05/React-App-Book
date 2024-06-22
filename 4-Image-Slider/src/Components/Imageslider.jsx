import { useState, useEffect } from "react";
import Spinner from "./Spinner";

function Image({ url }) {
  const [img, setImg] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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
        console.error("Fetch error:", e); // Log the error
        setError(e);
        setLoading(false);
      }
    };
    fetchImg();
  }, [url]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      {img.map((image) => (
        <div key={image.id} className="img-container">
          <img src={image.download_url} alt={image.author} />
        </div>
      ))}
    </div>
  );
}

export default Image;
