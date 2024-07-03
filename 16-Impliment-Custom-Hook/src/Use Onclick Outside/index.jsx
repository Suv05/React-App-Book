import { useRef, useState } from "react";
import UseOnClickOutside from "./useOnClickOutside";

function Index2({}) {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef();
  UseOnClickOutside(ref, () => {
    setShowModal(false);
  });
  return (
    <>
      {showModal ? (
        <center>
          <div ref={ref} className="card mt-5" style={{ width: "18rem" }}>
            <img
              src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top"
              alt="Nothing"
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ textDecoration: "underline" }}
              >
                Purple Smoke
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                accusamus, iure culpa aut provident quos omnis quas sint qui,
                maiores, nihil adipisci similique vel eum.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </center>
      ) : (
        <center>
          <button
            className="btn btn-primary btn-lg mt-4"
            onClick={() => setShowModal(true)}
          >
            Show Content
          </button>
        </center>
      )}
    </>
  );
}

export default Index2;
