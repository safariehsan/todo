import React from "react";
import "./App.css";
import NavBar from "./components/navBar";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import ToDo from './pages/todo';
import TaskDetail from './pages/taskDetail';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/todo/detail/:id" component={TaskDetail} />
        <Route path="/todo/edit/:id" component={ToDo} />
        <Route path="/todo" component={ToDo} />
        {/* <Redirect to="/not-found" /> */}
      </Switch>
    </React.Fragment>
  );
}

export default App;
