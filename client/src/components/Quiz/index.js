/** @format */

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import "./arrow.css";
import API from "../../utils/API";
import Button from "react-bootstrap/Button";
import Map from "./Map";

function Quiz() {
	const continent = useParams().continent;

	const [country, setCountry] = useState("");
	const [questionCount, setQuestionCount] = useState(1);

	const countryArr = useRef(null);
	useEffect(() => {
		API.getCountryByContinent(continent).then((res) => {
			countryArr.current = res.data; // Country Array from response

			getRandomCountry();
		});

		//TODO: Make call gto map api to retrieve the map for the given continent
	}, []);

	//Retrieving random country from the array to ask the user.
	function getRandomCountry() {
		const randomCountry =
			countryArr.current[Math.floor(Math.random() * countryArr.current.length)];

		setCountry(randomCountry);
		setQuestionCount(questionCount + 1);
		//TODO: Add functionality to check for correct answer and record the score
	}

	return (
	
<div className="container mt-5 p-4">
	<div className="row text-center title-container p-2">
		<div className="col-sm-12">
			<h2 className="continent-heading">{continent}</h2>
		</div>
	</div>
	<div className="row pt-5">
		<div className="col-sm-6">
			{/* 3 rows of elements */}
			<div className="row">
				<p className="question-container">Where is {country}?</p>
			</div>
			<div className="row mb-5">
				<div class="item">
					<button>
						Click Your Answer on the map
						<i class="fa fa-long-arrow-right arrow1" aria-hidden="true"></i>
					</button>
				</div>
			</div>
			<div className="row next-container m-4 p-5">
				{questionCount <= 5 ? (
					<Button
						type="button"
						className="btn btn-danger btn-lg"
						onClick={getRandomCountry}>
						<h3>NEXT QUESTION</h3>
					</Button>
				) : (
					<Button
						type="button"
						className="btn btn-danger btn-lg"
						href="/results">
						<h3>VIEW RESULTS</h3>
					</Button>
				)}
			</div>
		</div>
		<div className="col-sm-6 map-container">
			<Map continent={continent} />
		</div>
	</div>
</div>
	);
}

export default Quiz;
