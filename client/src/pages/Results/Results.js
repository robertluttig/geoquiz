import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import ResultsHeader from "./ResultsHeader";
import ResultCard from "./ResultCard";

function Results(props) {
  const { user, logout } = useAuth();
  const continent = useParams().continent;
  const countries = props.location.resultProps.countryList;
  const guessedCountries = props.location.resultProps.resultList;

  let correct = 0;
  let incorrect = 0;
  for (let i = 1; i < guessedCountries.length; i++) {
    if (Object.values(guessedCountries[i]).toString() === "Correct") {
      correct++;
    } else {
      incorrect++;
    }
  }
  const score = `${(correct / 5) * 100}%`;

  function getStatus(country) {
    let status = "Incorrect";
    for (let i = 1; i < guessedCountries.length; i++) {
      let countryStatus = guessedCountries[i];
      if (countryStatus[country] === "Correct") {
        status = "Correct";
        return "Correct";
      }
    }
    if (status === "Incorrect") {
      return "Incorrect";
    }
  }
  useEffect(() => {
    let results = {};
    results[continent] = score;

    API.saveResult(user.id, results)
      .then((res) => {
        console.log("Results saved successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user.id, score]);
  return (
    <div className="container mt-4 p-4">
      <div className="row">
        <div className="col-sm-12">
          <ResultsHeader continent={continent} />
        </div>
      </div>
      <div className="row text-center">
        {countries.map((country) => {
          return (
            <ResultCard
              key={Math.random()}
              country={country}
              status={getStatus(country)}
            />
          );
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
