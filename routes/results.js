const express = require("express");
const db = require("../models");
const { isAuthenticated } = require("../config/auth");

const router = express.Router();

router.post("/api/result",isAuthenticated, (req, res) => {
 // console.log("req.body--",req.body);
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
