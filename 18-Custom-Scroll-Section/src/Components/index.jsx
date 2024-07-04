import { useRef } from "react";
//for usese of ref hook see documentation of https://chatgpt.com/c/5169976b-91a2-4039-bd3a-4c7371833581
function Index({}) {
  const data = [
    {
      label: "First-Card",
      style: {
        width: "100vw",
        height: "600px",
        backgroundColor: "Yellow",
      },
    },
    {
      label: "Second-Card",
      style: {
        width: "100vw",
        height: "600px",
        backgroundColor: "green",
      },
    },
    {
      label: "Third-Card",
      style: {
        width: "100vw",
        height: "600px",
        backgroundColor: "red",
      },
    },
    {
      label: "Fourth-Card",
      style: {
        width: "100vw",
        height: "600px",
        backgroundColor: "orange",
      },
    },
    {
      label: "Fifth-Card",
      style: {
        width: "100vw",
        height: "600px",
        backgroundColor: "pink",
      },
    },
    {
      label: "Sixth-Card",
      style: {
        width: "100vw",
        height: "600px",
        backgroundColor: "silver",
      },
    },
  ];

  const cardRefs = useRef([]);
  const handelCardScroll = (getIndex) => {
    cardRefs.current[getIndex].scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <>
      <div className="text-center">
        <div>
          {data
            ? data.map((value, index) => (
                <button
                  key={index}
                  className="btn btn-primary btn-sm my-5 mx-3"
                  onClick={() => handelCardScroll(index)}
                >
                  {value.label}
                </button>
              ))
            : null}
        </div>
        <div className="card-content">
          {data
            ? data.map((value, index) => (
                <div
                  ref={(el) => (cardRefs.current[index] = el)}
                  key={index}
                  className="mt-3"
                  style={value.style}
                >
                  <h3>
                    <strong style={{ textDecoration: "underline" }}>
                      {value.label}
                    </strong>
                  </h3>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default Index;
