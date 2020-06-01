import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import TopNav from './Components/TopNav/TopNav';
import MidSection from "./Components/MidSection/MidSection";
import About from './Components/About/About';
import Train from './Components/TrainingPart/Train';
import Why from "./Components/WhyChose/Why";

function App() {
  return (
    <div className="App">
      <Home />
      <TopNav/>
      <MidSection />
      <About/>
      <Train/>
      <Why/>

    </div>
  );
}

export default App;
