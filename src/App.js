import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Navbar from './Components/Navbar/Navbar';
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';
import './App.css';

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    }, true);
  }, []);

  console.log(window.scrollY)
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <div className="App">
      {console.log(scroll)}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
        </Switch>
      </div>
    </EasybaseProvider>
  );
}

export default App;
