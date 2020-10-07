import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Zenaari from "./components/zenaari";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/zenaari">
          <Zenaari />
        </Route>
        <Redirect to="/zenaari" />
      </Switch>
    </Router>
  );
}

export default App;
