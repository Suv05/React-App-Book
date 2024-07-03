import { useEffect, useState } from "react";

function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      let data = await response.json();
      setItem(data);
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  return { item, error, loading, fetchData };
}

export default useFetch;
