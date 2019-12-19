import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Decrypt from "./components/Decrypt";
import Game from "./components/Game";
import GameTwo from "./components/Game2";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/decrypt" component={Decrypt} />
        <Route path="/game2" component={GameTwo} />
      </Switch>
    </div>
  );
}

export default App;
