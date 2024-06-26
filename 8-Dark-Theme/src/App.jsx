import { useState } from "react";
import useLocalStorage from "./Components/useLocalStorage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="light-dark-theme" data-theme={theme}>
        <div className="container mx-5 my-5">
          <h1 className="d-flex">Hello World!</h1>
          <button
            className="btn btn-outline-warning btn-lg mt-4 mx-4"
            onClick={handleTheme}
          >
            Change Theme
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
