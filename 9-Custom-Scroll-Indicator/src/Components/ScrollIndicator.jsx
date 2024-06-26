import React, { useEffect, useState } from "react";

function ScrollIndicator({ url }) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    let fetchProducts = async () => {
      try {
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
  }, [url]);

  const handleScrollPercentage = () => {
    const howMuchScrolled = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (howMuchScrolled / height) * 100;

    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
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
      <header>
        <h1 className="text-center mb-3">Custom Scroll Indicator</h1>
        <div
          className="progress"
          role="progressbar"
          aria-label="Info example"
          aria-valuenow={scrollPercentage}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            class="progress-bar bg-info text-dark"
            style={{ width: `${scrollPercentage}%` }}
          >
            {Math.floor(scrollPercentage)}%
          </div>
        </div>
      </header>
      <div className="container">
        {items && items.length > 0 ? (
          items.map((i) => (
            <div key={i.id} className="text-center">
              <p><b>{i.title}</b></p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </>
  );
}

export default ScrollIndicator;
