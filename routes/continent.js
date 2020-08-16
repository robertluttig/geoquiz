const express = require("express");
const fetch = require("node-fetch");
const { isAuthenticated } = require("../config/auth");

const router = express.Router();

//Retrieve Country facts
router.get("/api/facts/",isAuthenticated, (req, res) => {
  //The third party API needs the first letter of the country to be capitalized.
  let country =
    req.query.country[0].toUpperCase() + req.query.country.substring(1);

  (async () => {
    const where = encodeURIComponent(
      JSON.stringify({
        name: country,
      })
    );
    const response = await fetch(
      `https://parseapi.back4app.com/classes/Continentscountriescities_Country?limit=10&where=${where}`,
      {
        headers: {
          "X-Parse-Application-Id": process.env.APP_ID, // This is your app's application id
          "X-Parse-REST-API-Key": process.env.APP_KEY, // This is your app's REST API key
        },
      }
    );
    const data = await response.json(); // Here you have the data that you need

    let facts = {
      name: data.results[0].name,
      code: data.results[0].code,
      capital: data.results[0].capital,
      native: data.results[0].native,
      phone: data.results[0].phone,
      currency: data.results[0].currency,
      flag: data.results[0].emoji
    };
    //   console.log(JSON.stringify(data, null, 2));
    res.json(facts);
  })();
});

//Retrieve Country by Continent
router.get("/api/country/", (req, res) => {
  //The third party API needs the first letter of the continent to be capitalized.
  let continent =
    req.query.continent[0].toUpperCase() + req.query.continent.substring(1);
    (async () => {
      const where = encodeURIComponent(JSON.stringify({
        "continent": {
          "__type": "Pointer",
          "className": "Continentscountriescities_Continent",
          "objectId": "mSxk54vkg6"
        }
      }));
      const response = await fetch(
        `https://parseapi.back4app.com/classes/Continentscountriescities_Country?&keys=name&where=${where}`,
        {
          headers: {
            'X-Parse-Application-Id': 'XXYxNAp6QOHNM1CjdLzAZYvdZ8q3Vd356Oimm2xU', // This is your app's application id
            'X-Parse-REST-API-Key': 're578knlkWP30UjT2R7KIgsiw9I94rs5cJ7uoNCb', // This is your app's REST API key
          }
        }
      );
      const data = await response.json(); // Here you have the data that you need
      let countries = data.results.map((country) => {
        return country.name;
      });
     // console.log(countries);
      res.json(countries)
    })();
  
});

module.exports = router;
