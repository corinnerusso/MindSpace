import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Decrypt from "./components/Decrypt";
import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/decrypt" component={Decrypt} />
      </Switch>
    </div>
  );
}

export default App;
