import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import { Switch, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import ToDo from './pages/todo';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/todo" component={ToDo} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
