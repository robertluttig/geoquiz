/** @format */

import axios from "axios";
export default {
	// Gets a single user by id
	getUser: (id) => {
		return axios.get(`/api/user/${id}`);
	},
	// sign up a user to our service
	signUpUser: (username, email, password) => {
		return axios.post("api/signup", {
			username: username,
			email: email,
			password: password,
		});
	},

	// Get all results for a quiz
	getResultsByQuiz: function (quizId) {
		return axios.get("/api/results/quiz/" + quizId);
	},
	// Get a quiz by its id
	getQuizById: function (id) {
		return axios.get("/api/quizzes/" + id);
	},
	// Get all quizzes
	getAllQuizzes: function () {
		return axios.get("/api/quizzes");
	},
};
