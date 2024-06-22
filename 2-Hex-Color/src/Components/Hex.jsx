import { useState } from "react";

function Hex({}) {
  const [color, setColor] = useState("#000000");
  const [type, setType] = useState("HEX");
  const generateRandom = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handelHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let HEX = "#";
    for (let i = 0; i < 6; i++) {
      HEX += hex[generateRandom(hex.length)];
    }
    setColor(HEX);
    setType("HEX");
  };

  const handelRgbColor = () => {
    let r = generateRandom(256);
    let g = generateRandom(256);
    let b = generateRandom(256);
    const rgb = `RGB(${r},${g},${b})`;
    setColor(rgb);
    setType("RGB");
  };

  const handelRandom = () => {
    if (Math.random() < 0.5) {
      handelHexColor();
    } else {
      handelRgbColor();
    }
  };
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: color,
        }}
      >
        <center>
          <button
            className="btn btn-outline-info btn-lg mx-2 mt-3"
            onClick={handelHexColor}
          >
            HEX COLOR
          </button>
          <button
            className="btn btn-outline-warning btn-lg mx-2 mt-3"
            onClick={handelRgbColor}
          >
            RGB COLOR
          </button>
          <button
            className="btn btn-outline-primary btn-lg mx-2 mt-3"
            onClick={handelRandom}
          >
            RANDOM COLOR
          </button>
        </center>
        <div
          className="container text-center d-flex"
          style={{
            flexDirection: "column",
            marginTop: "20vh",
            border: "1px solid black",
          }}
        >
          <h1>{type}</h1>
          <h3>{color}</h3>
        </div>
      </div>
    </>
  );
}

export default Hex;
