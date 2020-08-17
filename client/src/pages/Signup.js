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
import Col from 'react-bootstrap/Col'

// const signupStyles = {
//   maxWidth: "20rem",
//   margin: "0 auto",
//   display: "flex",
//   justifyContent: "center",
//   flexDirection: "column",

// };

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
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
    API.signUpUser(formState.username, formState.email, formState.password)
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
            <h1><Badge variant="warning">Create Your Account </Badge></h1>
            <Form onSubmit={handleFormSubmit}>
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
              <Button variant="success" size="lg" block>Submit</Button>
            </Form>
          </Col>
          <Col md="auto">
            <h1><Badge variant="warning">Already a Geoquizer? </Badge></h1>
            <Button variant="success" size="lg" block to="/login">Log In Here</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
