import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";
import Home from "./components/Home";
import AsteroidDetails from "./components/AsteroidDetails";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={Store}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details/:id" component={AsteroidDetails} />
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
