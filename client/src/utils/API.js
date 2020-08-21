/** @format */

import axios from "axios";
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // sign up a user to our service
  signUpUser: (email, password) => {
    return axios.post("api/signup", {
      email: email,
      password: password,
    });
  },

  // Get all results for a quiz
  getResults: function (userId) {
    return axios.get("/api/results/" + userId);
  },

  saveResult: function (userId, result) {
    return axios.post("/api/result", {
      user: userId,
      results: result,
    });
  },
  getCountryFacts: function (country) {
    return axios.get("/api/facts?country=" + country);
  },
  getCountryByContinent: function (continent) {
    return axios.get("/api/country/?continent=" + continent);
  },
};
