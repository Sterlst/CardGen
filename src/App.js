import React from 'react';
import { Switch, Route } from "react-router-dom";


import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Navigationbar from './Components/Navigationbar';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
      </Switch>
    </div>
  );
}

export default App;
