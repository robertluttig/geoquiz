import React from "react";

function ResultsHeader(props) {
  return (
    <div className="row text-center mr-3">
      <div className="col-sm-12 title-container p-3">
        <h2>
          {/* {questionState.title}  */}
          {props.continent} Quiz Results
        </h2>
      </div>
    </div>
  );
}

export default ResultsHeader;
