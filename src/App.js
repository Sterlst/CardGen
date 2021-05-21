import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';
import './App.css';

function App() {

  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
        </Switch>
      </div>
    </EasybaseProvider>
  );
}

export default App;
