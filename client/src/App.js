import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Our Components
import { AuthProvider } from "./utils/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Quiz from "./components/Quiz/index";
import Signup from "./pages/Signup";
import About from "./pages/About/About";
import Results from "./pages/Results/Results";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <ProtectedRoute exact path={["/","/profile"]}>
              <Home />
            </ProtectedRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <ProtectedRoute exact path="/quiz/:continent">
              <Quiz />
            </ProtectedRoute>
            <ProtectedRoute exact path="/results/:continent" component={Results}>
            </ProtectedRoute>
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
