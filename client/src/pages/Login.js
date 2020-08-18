import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { Form, InputGroup } from "../components/LoginForm";
import Button from 'react-bootstrap/Button';
import Container from "../components/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

const loginStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: "20rem",
  margin: "0 auto",
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    login(email, password)
      // navigate to the profile page
      .then(() => history.push("/profile"))
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div className="page">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto" className="createAccount">
            <Card className="card" border="dark">
              <h1><Badge variant="warning">Login</Badge></h1>
              <Form>
                <InputGroup
                  id="email"
                  labelText="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputGroup
                  id="password"
                  labelText="Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="success" size="lg" block onClick={handleFormSubmit} type="submit">Submit</Button>
              </Form>
            </Card>
          </Col>
          <Col md="auto">
            <Card className="card" border="dark">
              <Button variant="success" size="lg" block href="/signup" >Go to Signup</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
