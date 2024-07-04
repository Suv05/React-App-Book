import { useState, useEffect } from "react";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
function App() {
  const url = "https://dummyjson.com/products?limit=0";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    let fetchProducts = async () => {
      try {
        setLoading(true);
        let response = await fetch(url);
        let data = await response.json();
        setItems(data.products);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-2">
        <b>Loading....</b>
      </div>
    );
  }

  return (
    <>
      <div className="container text-center">
        <h1 style={{ textDecoration: "underline" }}>Custom Products</h1>
        <button
          type="button"
          class="btn btn-primary btn-sm my-3"
          onClick={scrollBottom}
        >
          <FaAnglesDown size={30} />
        </button>
        {items && items.length
          ? items.map((item, index) => (
              <p key={index}>
                <strong>{item.title}</strong>
              </p>
            ))
          : null}
        <button
          type="button"
          class="btn btn-primary btn-sm my-3"
          onClick={scrollTop}
        >
          <FaAnglesUp size={30} />
        </button>
      </div>
    </>
  );
}

export default App;
