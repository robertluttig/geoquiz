/** @format */

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import "./arrow.css";
import API from "../../utils/API";
import mapImage from "./temp-map.jpg";

function Quiz() {
	const continent =  useParams().continent;
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
		<div className="container">
			<div className="row text-center  mr-3">
				<div className="col-sm-12 title-container p-3">
					<h2>
						{/* {questionState.title}  */}
						(Name-of-Country) Quiz
					</h2>
				</div>
			</div>
			<div className="row quiz-form-container pt-5">
				<div className="col-sm-4">
					<span className="question-container">Where is Peru?</span>
				</div>
				<div className="col-sm-4 map-container">
					<img src={mapImage} alt="Map" height="400" width="250" />
				</div>
				<div className="col-sm-4">
          Click your Answer on the Map
					<div className="row click-container mb-5">
						<div id="arrowAnim">
							<div class="arrowSliding">
								<div class="arrow"></div>
							</div>
							<div class="arrowSliding delay1">
								<div class="arrow"></div>
							</div>
							<div class="arrowSliding delay2">
								<div class="arrow"></div>
							</div>
							<div class="arrowSliding delay3">
								<div class="arrow"></div>
							</div>
						</div>
					</div>
					<div className="row next-container m-5 p-5">
          <button type="button" className="btn btn-danger btn-lg"> <h3>Next Question</h3></button>
            </div>
				</div>
			</div>
		</div>
	);
	// }
	// }
}

export default Quiz;
