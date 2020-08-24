import React, { useState } from "react";
import {Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { Form, InputGroup } from "../components/LoginForm";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import './LoginForm.css';
import swal from 'sweetalert';

/* const loginStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: "20rem",
  margin: "0 auto",
}; */

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
        // alerting user incorrect username/password
        swal({
          title: "Incorrect Email and/or Password!",
          text: "Please try again or create a new account.",
          icon: "warning",
          button: "Back to Log In",
        });
      });
  };

  return (
    
    <div className="container p-3 mt-4">
        <div className="row">
          <div className="createAccount col-sm">
            <Card className="card p-3 text-center" border="dark">
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
          </div>
          <div className="col-sm">
            <Card className="card p-3 text-center" border="dark">
            <h1>
								<Badge variant="warning">New to GeoQuiz? </Badge>
							</h1>
              <Button variant="success" size="lg" block href="/signup" >Go to Signup</Button>
            </Card>
          </div>
        </div>
      </div>
  );
}

export default Login;
