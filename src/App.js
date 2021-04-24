import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Questionnaire from "./Pages/Questionnaire/Questionnaire";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Questionnaire" component={Questionnaire} />
      </Switch>
    </div>
  );
}

export default App;
