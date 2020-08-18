import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "./../utils/API";
import { useAuth } from "../utils/auth";
import { Form, InputGroup } from "../components/LoginForm";
import "./Signup.css";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Container from "../components/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Signup() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const { isLoggedIn } = useAuth();

  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.signUpUser(formState.email, formState.password)
      .then((res) => {
        // once the user has signed up
        // send them to the login page
        history.replace("/login");
      })
      .catch((err) => alert(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="page">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto" className="createAccount">
            <Card className="card" border="dark">
            <h1><Badge variant="warning">Create Your Account </Badge></h1>
            <Form>
              <InputGroup
                id="email"
                labelText="Email"
                placeholder="jon.snow@email.com"
                name="email"
                type="email"
                onChange={handleChange}
              />
              <InputGroup
                id="pwd"
                labelText="Password"
                placeholder="p@ssw0Rd!"
                name="password"
                type="password"
                onChange={handleChange}
              />
              <Button onClick={handleFormSubmit} variant="success" size="lg" block>Submit</Button>
            </Form>
            </Card>
          </Col>
          <Col md="auto">
          <Card className="card" border="dark">
            <h1><Badge variant="warning">Already a Geoquizer? </Badge></h1>
            <Button variant="success" size="lg" block href="/login" >Log In Here</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
