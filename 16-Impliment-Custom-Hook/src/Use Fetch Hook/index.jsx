import React, { useState } from "react";
import useFetch from "./useFetch";

function Index() {
  const { item, error, loading, fetchData } = useFetch("https://dummyjson.com/products");
  const [showBtn, setShowBtn] = useState(true);

  const handleUseFetch = () => {
    setShowBtn(false);
    fetchData();
  };

  return (
    <>
      <div className="container text-center">
        <h1 className="mb-5" style={{textDecoration:"underLine"}}>Use Fetch Hook</h1>
        <div className="list">
          {showBtn && (
            <button className="btn btn-lg btn-info" onClick={handleUseFetch}>
              Use Fetch
            </button>
          )}
          {loading && <div>Loading....</div>}
          {error ? <div>Error: {error}</div> : null}
          {item && item.products && item.products.length
            ? item.products.map((value, index) => (
                <p key={index}>{value.title}</p>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default Index;
