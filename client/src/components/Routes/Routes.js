import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
import NotFound from "../../pages/NotFound/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}