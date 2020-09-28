import React from "react";
import "./App.css";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/comp1" component={Comp1} />
          <Route path="/comp2" component={Comp2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
