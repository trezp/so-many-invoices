
import React, { useContext } from 'react';

import Invoice from "./components/invoice/Invoice";
import InvoiceList from './components/invoice/InvoiceList';
import { InvoiceContext } from './contexts/InvoiceContext';
import NewInvoiceForm from "./components/NewInvoiceForm/NewInvoiceForm.js";


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";

function App() {
  const { invoices, removeInvoice } = useContext(InvoiceContext);

  return (
    <div className="app-container">
      <Router>
        <div>
          <header>
            <h1>Super Spectacular Invoicing!</h1>
            <nav>
            
            </nav>

          </header>
          <main>
            <InvoiceList/>
            <NewInvoiceForm/>
            <ul>
              <Switch>
                <Route path="/:id" children={<Invoice/>} />
              </Switch>
            </ul>
          </main>
        </div>
      </Router>

    </div>
  );
}

export default App;
