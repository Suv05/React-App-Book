import { useState, useEffect } from "react";

function Search() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/users?limit=0");
        if (!response.ok) {
          throw new Error("Not get!");
        }
        const data = await response.json();
        setUsers(data.users.map((u) => u.firstName));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (query.length === 0) {
      setFilteredUsers([]);
    } else {
      setFilteredUsers(
        users.filter((user) => user.toLowerCase().includes(query.toLowerCase()))
      );
    }
  }, [query, users]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleNameClick = (name) => {
    setQuery(name);
    setFilteredUsers([]); // Clear the filtered users after selection
  };

  return (
    <>
      <div className="input-group mb-3 mt-3 m-auto" style={{ width: "60%" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Find ur crush😘"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          onChange={handleInputChange}
          value={query}
        />
      </div>
      {loading && (
        <center>
          <div className="spinner-grow text-warning mt-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </center>
      )}
      {error && (
        <div className="text-center mt-4">
          <h3>Error: {error}</h3>
        </div>
      )}
      <ul className="text-center">
        {filteredUsers.map((user, index) => (
          <li
            key={index}
            className="mt-2 list"
            onClick={() => handleNameClick(user)}
            style={{ cursor: "pointer" }}
          >
            {user}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Search;
