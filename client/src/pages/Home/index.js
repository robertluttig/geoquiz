import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import "./home.css";
import { useAuth } from "../../utils/auth";
import Container from "../../components/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Home() {
  const { user, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [results, setResults] = useState("");
  //const history = useHistory();

  //const goToEditProfile = () => history.push("/profile");
  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setEmail(res.data.email);
    });
    API.getResults(user.id).then((res) => {
      setResults(res.data.results);
    });
  }, [user]);

  return (
    <div className="Home">

  
    <Container >
      <Row>
        <Col>
          <img
            src="https://media.giphy.com/media/mf8UbIDew7e8g/giphy.gif"
            className="Home-logo"
          ></img>
        </Col>
      </Row>

      <Row className="Home-header">
        <h2>Welcome {user.email}</h2>
      </Row>
      <Row className="Home-intro">
        <Col>
          <Card >
            <ListGroup variant="flush">
              <ListGroup.Item variant="success">Cras justo odio</ListGroup.Item>
              <ListGroup.Item variant="success">Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item variant="success">Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col>
          <Button href="/quiz">Take A Quiz</Button>
          <Button style={{ marginLeft: "1em" }} onClick={() => logout()}>
            Logout
          </Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Home;
