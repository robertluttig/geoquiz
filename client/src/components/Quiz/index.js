/** @format */

import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import "./style.css";
import "./arrow.css";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import Map from "../Map/Map";

let quizArr = [];
let answerList = [];

function Quiz() {
  const continent = useParams().continent;

  const [country, setCountry] = useState("");
  const [questionCount, setQuestionCount] = useState(1);

  let answerFromMap = {};

  const countryArr = useRef(null);
  useEffect(() => {
    API.getCountryByContinent(continent).then((res) => {
      countryArr.current = res.data; // Country Array from response

      getRandomCountry();
    });
  }, []);

  //Retrieving random country from the array to ask the user.
  function getRandomCountry() {
    const randomCountry =
      countryArr.current[Math.floor(Math.random() * countryArr.current.length)];
    if (quizArr.includes(randomCountry)) {
      getRandomCountry();
    } else {
      if (questionCount <= 5) {
        quizArr.push(randomCountry);
      }
      answerList.push(answerFromMap);
      setCountry(randomCountry);
      setQuestionCount(questionCount + 1);
    }
    //TODO: Add functionality to check for correct answer and record the score
  }

  const saveResults = (answer) => {
    answerFromMap = answer;
  };

  return (
    <div className="container mt-5 p-4">
      <div className="row text-center title-container">
        <div className="col-sm-12">
          <h2 className="continent-heading">{continent}</h2>
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-sm-4">
          {/* 3 rows of elements */}
          <div className="row">
            {questionCount <= 6 ? (
              <p className="question-container">Where is {country}?</p>
            ) : (
              <p className="question-container">Quiz Done</p>
            )}
          </div>
          <div className="row mb-5 click-container">
            Click your Answer on the Map
            <div id="arrowAnim">
              <div className="arrowSliding">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay1">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay2">
                <div className="arrow"></div>
              </div>
              <div className="arrowSliding delay3">
                <div className="arrow"></div>
              </div>
            </div>
          </div>
          <div className="row next-container m-4">
            {questionCount <= 6 ? (
              <Button
                type="button"
                className="btn btn-danger btn-lg"
                onClick={getRandomCountry}
              >
                <h3>NEXT QUESTION</h3>
              </Button>
            ) : (
              <Link
                to={{
                  pathname: `/results/${continent}`,
                  resultProps: { countryList: quizArr, resultList: answerList },
                }}
              >
                View Results
              </Link>
            )}
          </div>
        </div>
        <div className="col-sm-8 map-container p-2">
          <Map
            continent={continent}
            country={country}
            saveResult={saveResults}
          />
        </div>
      </div>
    </div>
  );
}

export default Quiz;
