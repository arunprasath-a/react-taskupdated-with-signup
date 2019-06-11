import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePageComponent from "../components/homepage";
import LogInPageComponent from "../components/loginpage";
import AboutUsPageComponent from "../components/aboutpage";
import TestPagePageComponent from "../components/testpage";
import SignUpPageComponent from "../components/signuppage";
import TestSignUpPageComponent from "../components/testsignuppage";
import TestLogInPageComponent from "../components/testloginpage";


class RouterComponent extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" exact strict component={HomePageComponent} />
          <Route path="/SignUp/" exact strict component={SignUpPageComponent} />
          <Route path="/LogIn/" exact strict component={TestLogInPageComponent} />
          <Route path="/About/" exact strict component={AboutUsPageComponent} />
          <Route path="/TestPage/" exact strict component={TestPagePageComponent} />
          <Route path="/test"  strict component={TestSignUpPageComponent} />
        </div>
      </Router>
    );
  }
}

export default RouterComponent;