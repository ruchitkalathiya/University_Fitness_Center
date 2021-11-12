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
import Gallary from "./components/Gallary/Gallary";
import RegForm from "./components/Form/RegForm";
import Footer from "./components/Footer/Footer";





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
          <Gallary />
          <Contact />
          <Footer />
        </Route>
      </Switch>
    </Router>
  </div >
);

export default App;
