import React, { useState } from "react";
import { Modal, Button, show } from "react-bootstrap";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Moviebox = ({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
}) => {
  const [shown, setshow] = useState(false);
  const handleshow = () => setshow(true);
  const handleclose = () => setshow(false);
  return (
    <div className="card text-center bg-secondary mb-3">
      <div className="card-body">
        <img
          className="card-img-top"
          style={{ width: "14rem" }}
          src={API_IMG + poster_path}
        />
        <div className="card-body">
          <button className="btn btn-dark" type="button" onClick={handleshow}>
            View more
          </button>
        </div>
        {/* <Modal show={shown} onHide={handleclose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Title></Modal.Title>
        </Modal>
        <Modal.Body>
          <img className="card-img-top" src={API_IMG + poster_path}></img>
          <h3>{title}</h3>
          <h5>ImDb:{vote_average}</h5>
          <h5>Release Date:{release_date}</h5>
          <br></br>
          <h6>Overview</h6>
          <p>{overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleclose}>
            Close
          </Button>
        </Modal.Footer> */}
      </div>

      {/* <h1>{title}</h1>

      <p>{overview}</p> */}
    </div>
  );
};

export default Moviebox;
