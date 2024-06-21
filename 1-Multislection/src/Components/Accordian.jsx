import { useState } from "react";
import data from "../Data/Data";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelection, setMultiSelection] = useState([]);

  const handleSingleSelection = (getId) => {
    setSelected(getId === selected ? null : getId);
  };

  const handleMultiSelection = (getId) => {
    let cpyMultiple = [...multiSelection];
    let findIfIdIsPresent = cpyMultiple.indexOf(getId);
    if (findIfIdIsPresent === -1) {
      cpyMultiple.push(getId);
    } else {
      cpyMultiple.splice(findIfIdIsPresent, 1);
    }
    setMultiSelection(cpyMultiple);
  };

  return (
    <>
      <div className="row">
        <div className="col-6 mybtn ">
          <button
            className="btn btn-outline-warning"
            onClick={() => setEnableMultiSelection(!enableMultiSelection)}
          >
            ENABLE
          </button>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          {data && data.length > 0
            ? data.map((items) => (
                <div key={items.id} className="accordian">
                  <div className="row">
                    <div className="title col-10">
                      <h3 className="mt-4">{items.question}</h3>
                    </div>
                    <div className="icon col-2 title">
                      <span
                        onClick={() =>
                          enableMultiSelection
                            ? handleMultiSelection(items.id)
                            : handleSingleSelection(items.id)
                        }
                      >
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
                    {enableMultiSelection
                      ? multiSelection.indexOf(items.id) !== -1 && (
                          <div className="answer">
                            <hr />
                            <h4>{items.answer}</h4>
                          </div>
                        )
                      : selected === items.id && (
                          <div className="answer">
                            <hr />
                            <h4>{items.answer}</h4>
                          </div>
                        )}
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default Accordian;
