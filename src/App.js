
import React, { useEffect, useState } from 'react';

import Invoice from "./components/invoice/Invoice";
import data from './invoiceDB.json';

import NewInvoiceForm from "./components/NewInvoiceForm/NewInvoiceForm.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

function App() {

  const initialState = data;
  const [invoices, setInvoices] = useState(initialState);
  
  const addInvoice = (invoice) => {
     // assuming no duplicates for demo purposes
    setInvoices([...invoices, invoice]);
  };

  const removeInvoice = (invoiceToBeDeleted) => {
    setInvoices(invoices.filter((invoice) => invoiceToBeDeleted !== invoice));
  };

  useEffect(() => {
    const invoices = JSON.parse(localStorage.getItem('invoices'));
    
    if (invoices) {
      setInvoices(invoices);
    }
  }, [initialState]);

  useEffect(() => {
    localStorage.setItem('invoices', JSON.stringify(invoices));
  }, [invoices]);

  const handleClick = (e, invoice) => {
    e.preventDefault();
    removeInvoice(invoice);
  }

  return (
    <div className="app-container">
      <Router>
        <div>
          <header>
            <h1>Super Spectacular Invoicing!</h1>
            <nav>
              <ul>
                {invoices.map(invoice => <li key={invoice.id}>
                  <Link to={invoice.id}>{invoice.title}</Link>
                  <button type="button" onClick={(e) => {handleClick(e,invoice)}}>X</button></li>
                )}
              </ul>
            </nav>
          </header>
          <main>
            <NewInvoiceForm addInvoice={addInvoice}/>
              <ul>
                <Switch>
                  <Route path="/:id" children={<Invoice />} />
                </Switch>
              </ul>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
