import React, { useState, useEffect } from "react";
import API from "./../utils/API";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Profile() {
  const [id, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUserId(res.data.id);
      setEmail(res.data.email);
    });
  }, [user]);

  return (
    <Container>
      <h1>On the profile page!</h1>
      <p>Email: {email}</p>
      <Link to="/">Go home</Link>
    </Container>
  );
}

export default Profile;
