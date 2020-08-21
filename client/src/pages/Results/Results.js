import React from "react";
import Button from "react-bootstrap/Button";
import ResultsHeader from "./ResultsHeader";
import ResultCard from "./ResultCard";
import { useParams } from "react-router-dom";

const countries = ["Argentina", "Peru", "Brazil", "Colombia", "Venezuela"];

function Results() {
  const continent = useParams().continent;

  return (
    <div className="container">
      <ResultsHeader continent={continent} />
      <div className="row text-center">
        {countries.map((country) => {
          return <ResultCard key={Math.random()} country={country} />;
        })}
      </div>
      <div className="row">
        <Button
          style={{ margin: "0 auto", marginTop: "3rem" }}
          variant="primary"
          href="/profile"
        >
          New Quiz
        </Button>
      </div>
    </div>
  );
}

export default Results;
