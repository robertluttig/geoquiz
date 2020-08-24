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
    "Oceania",
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
    let data = "Continent Not Found";
    if (results.length !== 0 && results.length !== "undefined") {
      for (let i=0;i< results.length;i++){
        let result = results[i];
          if(result.hasOwnProperty(continent)){  
            data = "Continent Found"        
            return continent+" Score:" + result[continent];
          }
      }
    }
    if(data === "Continent Not Found"){
      data = continent
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
                      let queryString = "/quiz/" + continent;
                      return (
                        <Button
                          variant="success"
                          key={continent}
                          href={queryString}
                        >
                          <ListGroup.Item  key={continent} variant="success">
                            {generateList(continent)}
                          </ListGroup.Item>
                        </Button>
                      );
                    })
                  : continentArr.map((continent) => {
                    let queryString = "/quiz/" + continent;
                      return (
                        <Button
                          variant="success"
                          key={continent}
                          href={queryString}
                        >
                          <ListGroup.Item key={continent} variant="success">
                            {continent}
                          </ListGroup.Item>
                        </Button>
                      );
                    })}
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col>
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
