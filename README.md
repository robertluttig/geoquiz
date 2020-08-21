# GeoQuiz

![](https://github.com/robertluttig/geoquiz/blob/master/demo.gif)

```GeoQuiz is a full stack MERN application that allows users to test their``` ```geographical knowledge by identifying countries on a map. ```
```This application utilizes React.js, Node, an Express Web Server, and more! ```
```It is backed by a MongoDB database and allows for the authentication of users``` ```with a folder structure that meets MVC paradigm.```


## Table of Contents

* [User-Story](#User-Story)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#Badge)
* [Contact](#Contact)





## User-Story
```
As a MIDDLE SCHOOL STUDENT, 
I WANT an app that tests my geography knowledge 
SO THAT I can get better at identifying countries on a map.
WHEN I select a continent from the table
THEN I am presented with the name of the continent, a map of the continent, and a question is asking for a specific country’s location
WHEN I complete the quiz
THEN I am presented with the Results Page which shows which questions I got correct/incorrect and facts for each country
```

## About This Boilerplate

This setup allows for a Node/Express/React/JWT app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

An article on how the server is setup with JWT can be found [here](https://hptechblogs.com/using-json-web-token-for-authentication/). This has been modified to use a mongo database instead of hardcoded array of users.

The front end has been setup to use JWT as a way of authenticating users and routes. To understand it's structure better please refer to the following article [here](https://hptechblogs.com/using-json-web-token-react/)

Please feel free to modify this code in anyway you see fit for your project. It is a boilerplate setup that tries to make sure you can get something up and running without having to worry about setting up user authentication from scratch.
I highly suggest you read the articles before jumping in so you can have an better understanding of how everything works in the code.

Server-side article and using JWT: https://hptechblogs.com/using-json-web-token-for-authentication/

Front End article on using the JWT on a react application: https://hptechblogs.com/using-json-web-token-react/

## Starting the app locally

Add a .env at the top level of this project.

Then inside of the .env add a SERVER_SECRET set to any value you'd like

```
SERVER_SECRET = 123456
```

First off make sure you have a local version of MongoDB running on your machine. This project will make a local database for you called `appDB`.

```
mongod
```

Start by installing front and backend dependencies. While in the root directory, run the following command:

```
npm install
```

After all installations complete, run the following command in your terminal:

```
npm start
```

That's it, your app should be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

### Create a Git Repo

Once you're ready to deploy, start by making sure your project is a git repository. If so, proceed to the next section, otherwise run the following commands in your terminal:

```
git init
git add .
git commit -m "Initial commit"
```

### Deploying

1. Go onto your heroku account and link your repository through the UI
2. Go to resources and find mLab as a Add-on
3. Provision a Mongo Database
4. Go back and click "Deploy"

## Tests/Linting

Run `npm run lint` from the project root to run eslint checks on the backend
and front end code. Run `npm run lint` from the `client` directory to lint the
client only.

The root and client have convenience scripts define to easily apply auto-fixes
with eslint. Run `npm run lint:fix` from the root and `client` to apply fixes
for the entire project or client only respectively.

## Travis CI

A basic configuration for Travis CI is included. Configure the GitHub repo to
run checks before merging to enforce linting checks and tests.

**IMPORTANT!** Add the mongodb service to `.travis.yml` if tests using MongoDB
are included in the project. Likewise, if another database is used to replace
MongoDB, then `.travis.yml` will need to be updated accordingly. Please refer
to the [Travis CI Documentation](https://docs.travis-ci.com/) for more
information.
