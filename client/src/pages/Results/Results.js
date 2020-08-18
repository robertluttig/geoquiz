import React from "react";
import ResultsHeader from "./ResultsHeader";
import ResultCard from "./ResultCard";

const countries = ["Argentina", "Peru", "Brazil", "Colombia", "Venezuela"];

function Results() {
  return (
    <div className="container">
      <ResultsHeader continent="South America" />
      <div className="row text-center  mr-3">
        {countries.map((country) => {
          return <ResultCard key={Math.random()} country={country} />;
        })}
      </div>
    </div>
  );
}

export default Results;

// we're going to have to use map to use all country names
