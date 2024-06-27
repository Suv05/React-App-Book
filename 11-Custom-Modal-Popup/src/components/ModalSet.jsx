import { useState } from "react";
import Modal from "./Modal";

function ModalSet({ mod }) {
  const [showModal, setShowModal] = useState(false);
  const [showTitle, setShowTitle] = useState("");
  const [showBody, setShowBody] = useState("");
  const handelModal = (getTitle, getBody) => {
    setShowTitle(getTitle);
    setShowBody(getBody);
    setShowModal(!showModal);
  };

  const closeBtn = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="text-center">
        {mod && mod.length
          ? mod.map((i) => (
              <button
                className={
                  showModal
                    ? "btn btn-outline-warning btn-lg mt-5 fade"
                    : "btn btn-outline-warning btn-lg mt-5"
                }
                onClick={() => handelModal(i.title, i.body)}
              >
                Open Live Modal
              </button>
            ))
          : null}
      </div>
      {showModal && (
        <Modal title={showTitle} body={showBody} closeBtn={closeBtn} />
      )}
    </>
  );
}

export default ModalSet;
