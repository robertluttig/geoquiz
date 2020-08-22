/** @format */

import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import API from "./../utils/API";
import { useAuth } from "../utils/auth";
import { Form, InputGroup } from "../components/LoginForm";
import "./Signup.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import swal from "sweetalert";

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
			.catch((err) => {
				// alerting user incorrect username/password
				swal({
					title: "Invalid Email and/or password!",
					text: "Please enter a valid email address and a strong password to continue.",
					icon: "warning",
					button: "Back to Sign Up",
				});
			});
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	return (
		<div className="container p-3 mt-4">
			<div className="row">
				<div className="createAccount col-sm">
					<Card className="card p-3 text-center" border="dark">
						<h1>
							<Badge variant="warning">Create Your Account </Badge>
						</h1>
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
							<Button
								onClick={handleFormSubmit}
								variant="success"
								size="lg"
								block>
								Submit
							</Button>
						</Form>
					</Card>
				</div>
				<div className="col-sm">
					<Card className="card p-3 text-center" border="dark">
						<h1>
							<Badge variant="warning">Already a Geoquizer? </Badge>
						</h1>
						<Button variant="success" size="lg" block href="/login">
							Log In Here
						</Button>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default Signup;
