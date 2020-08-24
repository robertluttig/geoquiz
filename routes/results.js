const express = require("express");
const db = require("../models");
const { isAuthenticated } = require("../config/auth");

const router = express.Router();

router.get("/api/results/:userid", isAuthenticated, (req, res) => {
  db.Result.findOne({ user: req.params.userid })
    .populate("user")
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({
          success: false,
          message: "No quiz results available for the requested user",
        });
      }
    })
    .catch((err) => res.status(400).send(err));
});



router.post("/api/result", isAuthenticated,(req, res) => {
  db.Result.findOne({ user: req.body.user })
    .then(async (data) => {
      if (data) {
        //If this is not the first time the user is taking the quiz, then do a update
        const result = resultDataToUpdate(data, req);
        await updateResult(req,res, result);
      } else {
        //If user is taking the quiz for the first time, then do a create
        await createResult(req,res);
      }
    })
    .catch((err) => res.status(400).send(err));
});

const resultDataToUpdate = (data, req) => {
  const continent = Object.keys(req.body.results);
  let result = data.results;
  let isContnentPresent = false;
  result.forEach((obj) => {
    const objKey = Object.keys(obj);
    //checking for key match irrespective of case
    if (objKey[0].toLowerCase() === continent[0].toLowerCase()) {
      //Both the objects uses same key with diffrent cases, so refering the objects with respective key
      obj[objKey] = req.body.results[continent];
      isContnentPresent = true;
    }
  });
  if (!isContnentPresent) {
    result.push(req.body.results);
  }
  return result;
};

async function updateResult(req, res, result) {
  db.Result.update({ user: req.body.user }, { $set: { results: result } })
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({
          success: false,
          message: "No data recieved from database",
        });
      }
    })
    .catch((err) => res.status(400).send(err));
};

async function createResult(req,res){
  db.Result.create(req.body)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({
          success: false,
          message: "No data recieved from database",
        });
      }
    })
    .catch((err) => res.status(400).send(err));
};

module.exports = router;
