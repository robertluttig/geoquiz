import React, { useState } from "react";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ResultsFacts({ country }) {
  // API call to get the facts about a given country
  function getFacts() {
    API.getCountryFacts(country).then((res) => {
      setFacts(res.data);
    });
  }
  const [facts, setFacts] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    getFacts();
  };

  return (
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
          <Modal.Title>{country}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontWeight: "bold" }}>Flag: {facts.flag}</p>
          <p>
            <strong>Country Code: </strong>
            {facts.code}
          </p>
          <p>
            <strong>Capital: </strong>
            {facts.capital}
          </p>
          <p>
            <strong>Currency: </strong>
            {facts.currency}
          </p>
          <p>
            <strong>Native: </strong>
            {facts.native}
          </p>
          <p>
            <strong>Phone Code: </strong>
            {facts.phone}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResultsFacts;
