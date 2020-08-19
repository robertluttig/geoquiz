import React from "react";

function ResultsHeader({continent}) {
  return (
    <div style={{ marginTop: "1rem" }} className="row text-center mr-3">
      <div className="col-sm-12 title-container p-3">
        <h2>{continent} Quiz Results</h2>
      </div>
    </div>
  );
}

export default ResultsHeader;
