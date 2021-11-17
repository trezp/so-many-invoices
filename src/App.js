
import React from 'react';

import Header from './components/Header';
import Home from "./components/Home";
import Invoice from "./components/invoice/Invoice";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header/>
          <main className="app-container">
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
