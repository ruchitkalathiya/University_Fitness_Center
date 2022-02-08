import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import Member from "./components/Member/Member";
import Classes from "./components/OurClasses/Classes";
import Schedule from "./components/Schedule/Schedule";
import Trainers from "./components/Trainers/Trainers";
import Contact from './components/Contact/Contact';
import RegForm from "./components/Form/RegForm";
import Footer from "./components/Footer/Footer";
import ImageSlider from "./components/Gallary/Imageslider";
import { SliderData } from './components/Gallary/SliderData';





const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/RegForm"><RegForm /></Route>
        <Route exact path="/">
          <Main />
          <Trainers />
          <Classes />
          <Schedule />
          <Member />
          <ImageSlider slides={SliderData} />;
          <Contact />
          <Footer />
        </Route>
      </Switch>
    </Router>
  </div >
);

export default App;
