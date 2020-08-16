const express = require("express");
const fetch = require("node-fetch");
const { isAuthenticated } = require("../config/auth");

const router = express.Router();

//Retrieve Country facts
router.get("/api/facts/", isAuthenticated, (req, res) => {
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
      flag: data.results[0].emoji,
    };

    res.json(facts);
  })();
});

//Retrieve Country by Continent
router.get("/api/country/", isAuthenticated, async (req, res) => {
  //The third party API needs the first letter of the continent to be capitalized.
  let continent =
    req.query.continent[0].toUpperCase() + req.query.continent.substring(1);

  const continentId = await retrieveContinentId(continent);

  const countries = await getCountriesByContinentId(continentId);
  res.json(countries);
});

const getCountriesByContinentId = async (continentId) => {
  const where = encodeURIComponent(
    JSON.stringify({
      continent: {
        __type: "Pointer",
        className: "Continentscountriescities_Continent",
        objectId: continentId,
      },
    })
  );
  const response = await fetch(
    `https://parseapi.back4app.com/classes/Continentscountriescities_Country?keys=name&where=${where}`,
    {
      headers: {
        "X-Parse-Application-Id": process.env.APP_ID, // This is your app's application id
        "X-Parse-REST-API-Key": process.env.APP_KEY, // This is your app's REST API key
      },
    }
  );
  const data = await response.json(); // Here you have the data that you need
  let countries = data.results.map((country) => {
    return country.name;
  });

  return countries;
};

const retrieveContinentId = async (continent) => {
  const where = encodeURIComponent(
    JSON.stringify({
      name: continent,
    })
  );
  const response = await fetch(
    `https://parseapi.back4app.com/classes/Continentscountriescities_Continent?limit=10&where=${where}`,
    {
      headers: {
        "X-Parse-Application-Id": process.env.APP_ID, // This is your app's application id
        "X-Parse-REST-API-Key": process.env.APP_KEY, // This is your app's REST API key
      },
    }
  );
  const data = await response.json(); // Here you have the data that you need

  continentId = data.results[0].objectId;

  return continentId;
};

module.exports = router;
