/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import API from "../../../../routes";

function Quiz() {
	const [questionState, setQuestionState] = useState({
		started: false,
		questions: [
			{
				id: 1,
				question: "",
				imageUrl: "",
				answer: 0,
			},
		],
		currentQuestion: 0,
	});

	// state for controlling page being displayed
	const [pageState, setPageState] = useState("quiz");

	//state for the score
    const [scoreState, setScoreState] = useState();
    
    //load the quiz into state on page load
    useEffect(() => {
        getQuiz().then(res => {
          res.data.questions.map(item => {
            return item.answer = "";
          });
          setQuestionState({
            ...questionState, questions: res.data.questions, timeLimit: res.data.timeLimit, title: res.data.title
          });
        })
      }, []);





}

export default Quiz;
