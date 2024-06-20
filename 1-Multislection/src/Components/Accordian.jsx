import { useState } from "react";
import data from "../Data/Data";
import { BsPlusLg } from "react-icons/bs";

function Accordian({}) {
  const [selected, setSlected] = useState(null);
  const handelOnClick = (getId) => {
    setSlected(getId === selected ? null : getId);
  };
  return (
    <>
      <div className="wrapper">
        <div className="container">
          {data && data.length > 0
            ? data.map((items) => (
                <div key={items.id}className="accordian">
                  <div className="row">
                    <div className="title col-10">
                      <h3 className="mt-4">{items.question}</h3>
                    </div>
                    <div className="icon col-2 title">
                      <span onClick={() => handelOnClick(items.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          role="img"
                          data-icon="PlusLarge"
                          aria-hidden="true"
                          className="elj7tfr3 default-ltr-cache-1dpnjn e164gv2o4 mb-3"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    {selected === items.id ? (
                     
                      <div className="answer">
                        <hr />
                        <h4>{items.answer}</h4></div>
                    ) : null}
                  </div>{" "}
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default Accordian;
