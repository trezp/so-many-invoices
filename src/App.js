
import React from 'react';
import Typography from '@mui/material/Typography';

import Home from "./components/Home";
import Invoice from "./components/invoice/Invoice";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <div>
          <header>
            <Typography variant="h3">Invoicing!</Typography>
            <Link to="/">Home</Link>
          </header>
          <main>
            <ul>
              <Switch>
                <Route path="/:id" children={<Invoice/>} />
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </ul>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
