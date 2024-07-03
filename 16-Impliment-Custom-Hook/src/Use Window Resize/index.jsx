import React from "react";
import useWindowResize from "./useWindowResize";

function Index3({}) {
  const { width, height } = useWindowResize();

  return (
    <>
      <center>
        <div>
          <h1>Window Size</h1>
          <p>Width:{width}</p>
          <p>Height:{height}</p>
        </div>
      </center>
    </>
  );
}

export default Index3;
