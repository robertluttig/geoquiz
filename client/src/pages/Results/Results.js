import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import ResultsHeader from "./ResultsHeader";
import ResultCard from "./ResultCard";
function Results(props) {
  const continent = useParams().continent;
  console.log(continent);
  const countries = props.location.resultProps.countryList;
  const guessedCountries = props.location.resultProps.resultList;
  console.log(guessedCountries);
  let correct = 0;
  let incorrect = 0;
  for (let i = 1; i < guessedCountries.length; i++) {
    if (Object.values(guessedCountries[i]).toString() === "Correct") {
      correct++;
    } else {
      incorrect++;
    }
    console.log(`Correct: ${correct} Incorrect: ${incorrect}`);
  }
  const score = `${(correct / 5) * 100}%`;
  console.log(`Your score is: ${score}`);
  useEffect(() => {
    let results = {};
    results[continent] = score;
    console.log(results);
    API.saveResult("5f3af7f57abf340dd9298de0", results);
  });
  return (
    <div className="container mt-4 p-4">
      <div className="row">
        <div className="col-sm-12">
          <ResultsHeader continent={continent} />
        </div>
      </div>
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