import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function ModalPage() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <>
      <div className="example">
        <div className="modal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <span className="close-button flex align-item-center">
                  <AiOutlineClose />
                </span>
                {/* <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button> */}
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => (show1 ? setShow1(false) : setShow1(true))}
      >
        Launch demo modal with backdrop
      </button>

      <div
        className={`modal fade ${show1 ? "show" : ""}`}
        id="exampleModal"
        tabIndex="-1"
        style={show1 ? { display: "block" } : { display: "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShow1(false)}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="example">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => (show2 ? setShow2(false) : setShow2(true))}
        >
          Launch demo fullscreen modal
        </button>
      </div>
      <div
        className={`modal fade ${show2 ? "show" : ""}`}
        id="exampleModal"
        tabIndex="-1"
        style={show2 ? { display: "block" } : { display: "none" }}
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShow2(false)}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
