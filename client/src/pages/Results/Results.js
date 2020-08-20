import React from "react";
import Button from "react-bootstrap/Button";
import ResultsHeader from "./ResultsHeader";
import ResultCard from "./ResultCard";
import "./style.css"

const countries = ["Argentina", "Peru", "Brazil", "Colombia", "Venezuela"];

function Results() {
  return (
    <div className="container mt-4 p-4">
      <div className="row">
        <div className= "col-sm-12">
      <ResultsHeader continent="South America" />
      </div>
      </div>
      <div className="row text-center">
        {countries.map((country) => {
          return <ResultCard key={Math.random()} country={country} />;
        })}
      </div>
      <div className="row">
        <Button style={{ margin: "0 auto", marginTop: "3rem" }} variant="primary" href="/profile">
          New Quiz
        </Button>
      </div>
    </div>
  );
}

export default Results;
