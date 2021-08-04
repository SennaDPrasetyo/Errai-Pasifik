import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./views/Main";
import WebSection from "./views/WebSection";
import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Sidebar></Sidebar>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route exact path="/section/:url">
          <WebSection></WebSection>
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
