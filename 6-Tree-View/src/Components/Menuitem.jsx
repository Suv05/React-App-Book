import { useState } from "react";
import Menulist from "./Menulist";

function Menuitem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (getLabel) => {
    setDisplayCurrentChildren((prev) => ({
      ...prev,
      [getLabel]: !prev[getLabel],
    }));
  };

  return (
    <li>
      <p>{item.label}</p>
      {item && item.children && item.children.length > 0 ? (
        <span onClick={() => handleToggleChildren(item.label)}>
          {displayCurrentChildren[item.label] ? (
            <button>-</button>
          ) : (
            <button>+</button>
          )}
        </span>
      ) : null}
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <Menulist list={item.children} />
      ) : null}
    </li>
  );
}

export default Menuitem;
