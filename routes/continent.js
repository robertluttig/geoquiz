const express = require("express");
const fetch = require('node-fetch');
const { isAuthenticated } = require("../config/auth");

const router = express.Router();

// use isAuthenticated middleware to protect this route
router.get("/api/facts/", isAuthenticated, (req, res) => {
  //The third party API needs the first letter of the country to be capitalized.
   let country = req.query.country[0].toUpperCase() + req.query.country.substring(1)
  
    (async () => {
        const where = encodeURIComponent(JSON.stringify({
          "name": country
        }));
        const response = await fetch(
          `https://parseapi.back4app.com/classes/Continentscountriescities_Country?limit=10&where=${where}`,
          {
            headers: {
              'X-Parse-Application-Id': process.env.APP_ID, // This is your app's application id
              'X-Parse-REST-API-Key': process.env.APP_KEY, // This is your app's REST API key
            }
          }
        );
        const data = await response.json(); // Here you have the data that you need
     //   console.log(JSON.stringify(data, null, 2));
        res.json(data)
      })();
});

module.exports = router; 
