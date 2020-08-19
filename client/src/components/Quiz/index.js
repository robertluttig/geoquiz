/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import "./arrow.css";
import API from "../../utils/API";
import mapImage from "./temp-map.jpg";
import Button from "react-bootstrap/Button";

function Quiz() {
  const continent = useParams().continent;
  let countryArr = [];
  
  const [questionState, setQuestionState] = useState({
    country: "",
    questionCount: 0,
  });

  // // state for controlling page being displayed
  // const [pageState, setPageState] = useState("quiz");

  // //state for the score
  // const [scoreState, setScoreState] = useState();

  // //load the quiz into state on page load
  /* useEffect(() => {
    getQuiz().then((res) => {
      res.data.questions.map((item) => {
        return (item.answer = "");
      });
      setQuestionState({
        ...questionState,
        questions: res.data.questions,
        title: res.data.title,
      });
    });
  }, []); */

  useEffect(() => {
    API.getCountryByContinent(continent).then((res) => {
      countryArr = res.data; // Country Array from response
      getRandomCountry();
    });

    //TODO: Make call gto map api to retrieve the map for the given continent
  }, []);

  //retrieving random country from the array to ask the user.
  function getRandomCountry() {
    setQuestionState({
      country: countryArr[Math.floor(Math.random() * countryArr.length)],
      questionCount: questionState.questionCount + 1,
    });
    console.log(questionState.questionCount);
  }

  return (
    <div className="container">
      <div className="row text-center  mr-3">
        <div className="col-sm-12 title-container p-3">
          <h2 className="continent-heading">{continent}</h2>
        </div>
      </div>
      <div className="row quiz-form-container pt-5">
        <div className="col-sm-4">
          <span className="question-container">
            Where is {questionState.country}
          </span>
        </div>
        <div className="col-sm-4 map-container">
          <img src={mapImage} alt="Map" height="400" width="250" />
        </div>
        <div className="col-sm-4">
          Click your Answer on the Map
          <div className="row click-container mb-5">
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
          <div className="row next-container m-5 p-5">
            {questionState.questionCount <= 5 ? (
              <Button
                type="button"
                className="btn btn-danger btn-lg"
                onClick={getRandomCountry}
              >
                <h3>NEXT QUESTION</h3>
              </Button>
            ) : (
              <Button
                type="button"
                className="btn btn-danger btn-lg"
                href="/results"
              >
                <h3>VIEW RESULTS</h3>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
