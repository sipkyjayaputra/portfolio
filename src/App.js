import React from 'react';
import Welcome from './components/Welome';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route>
            <Welcome />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
