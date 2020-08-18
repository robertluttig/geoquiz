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

  function generateList(continent) {
    let data = "NO RESULTS TO DISPLAY";
    if (results.length !==0 && results.length !== "undefined") {
      results.map((result) => {
        if (result[continent]) {
          data = continent + " " + result[continent];
        }else {
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
                  ? continentArr.map((continent) => {
                      return (
                        <Button variant="success" key={continent} href="/quiz">
                          <ListGroup.Item variant="success">
                          {generateList(continent)}
                        </ListGroup.Item>
                        </Button>
                        
                      );
                    })
                  : continentArr.map((continent) => {
                     return (<ListGroup.Item key={continent} variant="success">
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
