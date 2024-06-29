import { useState } from "react";

function Search({}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState([]);
  const handelUsersData = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/users?limit=0");
      if (!response.ok) {
        throw new Error("Not get!");
      }
      const data = await response.json();
      setUser(data.users);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  console.log(user);
  return (
    <>
      <div class="input-group mb-3 mt-3 m-auto" style={{ width: "60%" }}>
        <input
          type="text"
          class="form-control"
          placeholder="Find ur crush😘"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={handelUsersData}
        />
        {loading && (
          <center>
            <div class="spinner-grow text-warning mt-3" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </center>
        )}
        {error && (
          <div className="text-center mt-4">
            <h3>Error:{error}</h3>
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
