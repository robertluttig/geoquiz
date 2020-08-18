import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Results() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <div className="row text-center  mr-3">
        <div className="col-sm-12 title-container p-3">
          <h2>
            {/* {questionState.title}  */}
            (Name-of-Continent) Quiz Results
          </h2>
        </div>
      </div>
      <div className="row text-center  mr-3">
        <div className="col-sm-2 title-container p-3 m-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Brazil</h5>
              <span className="badge badge-pill badge-danger">Incorrect</span>
              <>
                <Button style={{ marginTop: "8%"}} variant="primary" onClick={handleShow}>
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
                    <Button style={{ marginTop: "8%"}} variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button  variant="primary">Understood</Button>
                  </Modal.Footer>
                </Modal>
              </>
            </div>
          </div>
        </div>
        <div className="col-sm-2 title-container p-3 m-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Argentina</h5>
              <span className="badge badge-pill badge-success">Correct</span>
              <>
                <Button style={{ marginTop: "8%"}} variant="primary" onClick={handleShow}>
                  Country Facts
                </Button>

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Argentina</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    I will not close if you click outside me. Don't even try to
                    press escape key.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                  </Modal.Footer>
                </Modal>
              </>
            </div>
          </div>
        </div>
        <div className="col-sm-2 title-container p-3 m-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Chile</h5>
              <span className="badge badge-pill badge-success">Correct</span>
              <>
                <Button style={{ marginTop: "8%"}} variant="primary" onClick={handleShow}>
                  Country Facts
                </Button>

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Chile</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    I will not close if you click outside me. Don't even try to
                    press escape key.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                  </Modal.Footer>
                </Modal>
              </>
            </div>
          </div>
        </div>
        <div className="col-sm-2 title-container p-3 m-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Peru</h5>
              <span className="badge badge-pill badge-success">Correct</span>
              <>
                <Button style={{ marginTop: "8%"}} variant="primary" onClick={handleShow}>
                  Country Facts
                </Button>

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Peru</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    I will not close if you click outside me. Don't even try to
                    press escape key.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                  </Modal.Footer>
                </Modal>
              </>
            </div>
          </div>
        </div>
        <div className="col-sm-2 title-container p-3 m-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Colombia</h5>
              <span className="badge badge-pill badge-danger">Incorrect</span>
              <>
                <Button style={{ marginTop: "8%"}} variant="primary" onClick={handleShow}>
                  Country Facts
                </Button>

                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Colombia</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    I will not close if you click outside me. Don't even try to
                    press escape key.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                  </Modal.Footer>
                </Modal>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
