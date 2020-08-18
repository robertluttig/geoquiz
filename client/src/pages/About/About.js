import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <h1 className="heading">What is GeoQuiz?</h1>

      <div class="container">
        <div class="row">
          {/* Instruction Card */}
          <div class="col-sm">
            <div className="instructions">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Quiz Instructions</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    Welcome to GeoQuiz!
                  </h6>
                  <ol className="card-text">
                    <li>
                      After you have successfully logged in, you can begin a
                      quiz by selecting one of the continents listed on the
                      homepage.
                    </li>
                    <li>
                      Once you have selected a continent, you will be shown an
                      image of the continent. You will then be given a country
                      to identify by clicking on the map
                    </li>
                    <li>
                      You will be asked to identify a total of five (5)
                      countries for the continent you initially choose
                    </li>
                    <li>
                      Check out your score after finishing the quiz and make
                      sure to challenge your friends and family!
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          {/* Link to Repo */}
          <div class="col-sm">
            <div className="repo">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">GitHub Repository</h5>
                  <p className="card-text">
                    Take a look at our code on {""}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/robertluttig/geoquiz"
                      className="card-link"
                    >
                      GitHub!
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
