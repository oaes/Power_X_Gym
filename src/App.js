import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import TopNav from './Components/TopNav/TopNav';
import About from './Components/About/About';
import { BrowserRouter as Router, Switch , Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
        <TopNav></TopNav>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
