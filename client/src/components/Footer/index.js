import React from "react";
import "./style.css";

//this component is a sticky footer
//styling for it to be a footer in ./style.css
//connect each link to our github profiles

function Footer() {
    return (
      <footer>
        <div className="uk-flex uk-flex-column">
          <div className="uk-margin uk-margin-top uk-text-small">
            Developed by
          </div>
          <div className="uk-flex uk-flex-row uk-flex-center">
  
            {/* info for Janani */}
            <div className="member-info">
              <a href="https://github.com/janani2285" target="_blank" rel="noopener noreferrer">
                <img className="member-thumbnail" src="https://avatars1.githubusercontent.com/u/60902964?s=400&u=f09819b7a8342a29630728a55f962a5b0637427d&v=4" alt="Janani Nagaraj Amutha" />
              </a>
              <div>Janani<br />Nagaraj Amutha</div>
            </div>

  }

  export default Footer;