/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";

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

	// // state for controlling page being displayed
	// const [pageState, setPageState] = useState("quiz");

	// //state for the score
	// const [scoreState, setScoreState] = useState();

	// //load the quiz into state on page load
	useEffect(() => {
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
	}, []);

	const { id } = useParams();
	// // get quiz by ID
	const getQuiz = async () => {
		const quiz = await API.getQuizById(id);
		return quiz;
	};

	// const preventFormSubmit = (event) => {
	//   event.preventDefault();
	// }

	// const myRender = (page) => {
	// if (page === "quiz") {
	return (
		<div className="quiz-form-container container">
			<div className="row text-center">
				<div className="col-sm">
  <h2> 
    {/* {questionState.title}  */}
   (Name-of-Country) Quiz
    </h2>
          </div>
			</div>
			<div className="row">
				<div className="col-sm">Hellow Row2</div>
			</div>
		</div>
	);
	// }
	// }
}

export default Quiz;
