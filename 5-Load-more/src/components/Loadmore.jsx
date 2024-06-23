import { useEffect, useState } from "react";

function Loadmore({}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true); // Set loading to true when fetching new products
        let response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        );
        if (!response.ok) {
          throw new Error("response was not good!");
        }
        let data = await response.json();
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setLoading(false);
      } catch (e) {
        setError(e);
        setLoading(false); // Set loading to false in case of error
      }
    };
    fetchProduct();
  }, [count]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (loading && products.length === 0) {
    return (
      <center>
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </center>
    );
  }

  console.log(products);
  return (
    <div className="container">
      <div className="row">
        {products && products.length !== 0
          ? products.map((item) => (
              <div
                className="card col-lg-4 col-md-3 col-sm-2 mb-2 d-flex flex-column mx-3 mt-3"
                style={{ width: "18rem" }}
                key={item.id}
              >
                <img
                  src={item.thumbnail}
                  className="card-img-top"
                  alt={item.title}
                />
                <div className="card-body">
                  <p className="card-text">
                    <b>
                      <span>{item.title}</span>
                    </b>
                    <p>
                      <i>&#8362;{item.price}</i>
                    </p>
                  </p>
                </div>
              </div>
            ))
          : null}
      </div>
      {!loading && (
        <center>
          <button
            onClick={() => setCount(count + 1)}
            className="btn btn-outline-warning mt-4 mb-2 btn-lg"
          >
            Load More
          </button>
        </center>
      )}
    </div>
  );
}

export default Loadmore;
