import React from "react";
import ResultsFacts from "./ResultsFacts";

function ResultCard({ country, status }) {
  return (
    <div className="col-sm-2 title-container p-3 m-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{country}</h5>
          {status === "Correct" ? (
            <span className="badge badge-pill badge-success">Correct</span>
          ) : (
            <span className="badge badge-pill badge-danger">Incorrect</span>
          )}
          <ResultsFacts country={country} />
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
