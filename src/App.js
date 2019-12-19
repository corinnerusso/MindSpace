import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Decrypt from "./components/Decrypt";
import Game1 from "./components/Game1";
import ContextMessage from "./components/Context";

function App() {
  return (
    <div className="App">
      <ContextMessage.Provider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game1/:id" component={Game1} />
          <Route path="/decrypt" component={Decrypt} />
        </Switch>
      </ContextMessage.Provider>
    </div>
  );
}

export default App;
