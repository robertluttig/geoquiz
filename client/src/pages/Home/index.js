import React from "react";
import { useHistory } from "react-router-dom";
import logo from "./logo.svg";
import "./home.css";
import { useAuth } from "../../utils/auth";
import Container from "../../components/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function Home() {
  const { user, logout } = useAuth();
  const history = useHistory();

  const goToEditProfile = () => history.push("/profile");

  return (
    <Container className="Home">
      <Row>
        <Col>
         <img src="https://media.giphy.com/media/mf8UbIDew7e8g/giphy.gif" className="Home-logo"></img> 
        </Col>
      </Row>
     
      <Row className="Home-header">     
        <h2>Welcome {user.email}</h2>
      </Row>
      <Row className="Home-intro">
        <Col>
        <button onClick={goToEditProfile}>Go to Profile</button>
        <button style={{ marginLeft: "1em" }} onClick={() => logout()}>
          Logout
        </button>
        </Col>
        
      </Row>
    </Container>
  );
}

export default Home;
