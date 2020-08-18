import React, { useState, useEffect } from "react";
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
  const [results, setResults] = useState([]);

  const continentArr = [
    "Asia",
    "Africa",
    "Europe",
    "North America",
    "South America",
    "Australia",
    "Antarctica",
  ];
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

  function generateList(result) {
    let data = "NO RESULTS TO DISPLAY";
    if (result !== "undefined") {
      continentArr.map((continent) => {
        if (result[continent]) {
          data = continent + " " + result[continent];
        }
        if (result[continent] === "undefined") {
          data = continent;
        }
      });
    }
    return data;
  }

  return (
    <div className="bg">
      <Container className="Home">
        <Row>
          <h2 className="Home-header">Welcome {user.email}</h2>
        </Row>
        <Row className="Home-intro">
          <Col>
            <Card>
              <ListGroup variant="flush">
                {results.length
                  ? results.map((result) => {
                      return (
                        <ListGroup.Item variant="success">
                          {generateList(result)}
                        </ListGroup.Item>
                      );
                    })
                  : continentArr.map((continent) => {
                     return (<ListGroup.Item variant="success">
                        {continent}
                      </ListGroup.Item>)
                    })}
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
