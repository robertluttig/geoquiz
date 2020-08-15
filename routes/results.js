const express = require("express");
const db = require("../models");
const { isAuthenticated } = require("../config/auth");

const router = express.Router();

router.get("/api/results/:userid",isAuthenticated, (req, res) => {

  db.Result.findOne({user: req.params.userid})
    .populate("user")
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No quiz results available for the requested user"});
      }
    })
    .catch((err) => res.status(400).send(err));
});

router.post("/api/result",isAuthenticated, (req, res) => {
  db.Result.create(req.body)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No data recieved from database"});
      }
    })
    .catch((err) => res.status(400).send(err));
});
module.exports = router;
