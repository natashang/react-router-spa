import React from "react";
import "./App.css";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Home from "./Home";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        This is a small SPA built with React using React-Router-Dom and deployed
        on GitHub Pages. Visit these paths to see the subcomponent views.
      </header>

      <BrowserRouter basename="/react-router-spa">
        <Link to="/">
          <h3>/</h3>
        </Link>
        <Link to="/comp1">
          <h3>/comp1</h3>
        </Link>
        <Link to="/comp2">
          <h3>/comp2</h3>
        </Link>
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
