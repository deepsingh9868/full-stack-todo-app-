import React from "react";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Home from "../Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Errorpage from "../Errorpage/Errorpage";
import Todo from "../Todo/Todo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route>
            <Errorpage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

