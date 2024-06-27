import { useState } from "react";

function CustomTabs({ tabs }) {
  const [para, setPara] = useState("");
  const handelTab = (getLabel) => {
    tabs.forEach((element) => {
      if (element.label === getLabel) {
        setPara(element.content);
      }
    });
  };

  return (
    <>
      <div className="text-center">
        {tabs && tabs.length !== 0
          ? tabs.map((items) => (
              <button
                className="btn btn-lg btn-outline-primary mx-3 mt-3"
                onClick={() => handelTab(items.label)}
                key={items.label}
              >
                {items.label}
              </button>
            ))
          : null}
        <h5>
          <p className="mt-4">{para}</p>
        </h5>
      </div>
    </>
  );
}

export default CustomTabs;
