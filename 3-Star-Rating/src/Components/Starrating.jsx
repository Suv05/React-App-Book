import { useState } from "react";
import { IoStarOutline } from "react-icons/io5";

function Star({ rating }) {
  const [rate, setRate] = useState(0);
  const [hover, setHover] = useState(null);

  const handleOnClick = (getIndex) => {
    setRate(getIndex + 1);
  };
  const handleOver = (getIndex) => {
    setHover(getIndex + 1);
  };
  const handleLeave = () => {
    setHover(null);
  };

  return (
    <>
      <div className="text-center star">
        {[...Array(rating)].map((_, index) => {
          const isActive = index < (hover ?? rate);
          index + 1;
          return (
            <IoStarOutline
              key={index}
              size={40}
              onClick={() => handleOnClick(index)}
              onMouseLeave={handleLeave}
              onMouseOver={() => handleOver(index)}
              className={isActive ? "active" : null}
            />
          );
        })}
      </div>
    </>
  );
}

export default Star;
