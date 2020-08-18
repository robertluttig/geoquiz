import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ResultCard(props) {
  console.log(props);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-sm-2 title-container p-3 m-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.country}</h5>
          <span className="badge badge-pill badge-danger">Incorrect</span>
          <>
            <Button
              style={{ marginTop: "8%" }}
              variant="primary"
              onClick={handleShow}
            >
              Country Facts
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Brazil</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                I will not close if you click outside me. Don't even try to
                press escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button
                  style={{ marginTop: "8%" }}
                  variant="secondary"
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
              </Modal.Footer>
            </Modal>
          </>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
