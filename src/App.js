import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import TopNav from "./Components/TopNav/TopNav";
import About from "./Components/About/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pricing from "./Components/Pricing/Pricing";
import Classes from "./Components/Classes/Classes";
import Gym from './Components/AdvanceGym/Agym';
import Personal from './Components/PersonalInfo/Personal';

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav></TopNav>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/classes">
              <Classes />
            </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about us">
            <About />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/personal">
            <Personal/>
          </Route>
          <Route path="/gym">
            <Gym/>

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
