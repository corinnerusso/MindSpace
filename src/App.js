import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Decrypt from "./components/Decrypt";


import GameTwo from "./components/Game2";

import Game1 from "./components/Game1";
import { BrowserRouter } from "react-router-dom";
import Context from "./components/Context";


function App() {
  const [count, setCount] = useState({
    message: ["?", "?", "?", "?", "?", "?", "?", "?"]
  });
  return (

    <Context.Provider value={{ count, setCount }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game1/:id" component={Game1} />
    <Route path="/game2" component={GameTwo} />
          <Route path="/decrypt" component={Decrypt} />
        </Switch>
      </BrowserRouter>
    </Context.Provider>

  );
}

export default App;
