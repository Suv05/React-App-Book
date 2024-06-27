import { RxCross2 } from "react-icons/rx";

function Modal({ title, body, closeBtn }) {
  return (
    <div className="container mt-4">
      <div className="title pt-2">
        <h3>
          {title}
          <span className="cross-btn" onClick={closeBtn}>
            <RxCross2 size={25} />
          </span>
        </h3>
        <hr />
      </div>
      <div className="body">{body}</div>
      <hr />
      <div className="close">
        <button className="btn btn-primary mx-2 mb-3" onClick={closeBtn}>
          Close
        </button>
        <button className="btn btn-primary mx-2 mb-3">Save Changes</button>
      </div>
    </div>
  );
}

export default Modal;
