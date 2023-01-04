import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import { DogDetail } from "./components/DogDetail/DogDetail";
import LandingPage from "./components/LandingPage/LandingPage";
import CreateDog from "./components/CreateDog/CreateDog";
import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" ? null : <Header />}
      <Switch>
        <Route exact path="/" component={LandingPage} />;
        <Route exact path="/home" component={Home} />;
        <Route exact path="/dogDetail/:id" component={DogDetail} />;
        <Route exact path="/createDog" component={CreateDog} />;
      </Switch>
    </div>
  );
}

export default App;
