
import React, { useContext } from 'react';

import Invoice from "./components/invoice/Invoice";
import { InvoiceContext } from './contexts/InvoiceContext';
import NewInvoiceForm from "./components/NewInvoiceForm/NewInvoiceForm.js";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

function App() {
  const { invoices, removeInvoice } = useContext(InvoiceContext);

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
                {invoices && invoices.map(invoice => 
                  <li key={invoice.id}>
                    <Link to={invoice.id}>{invoice.title}</Link>
                    <button type="button" onClick={(e) => {handleClick(e,invoice)}}>X</button>
                  </li>
                )}
              </ul>
            </nav>
          </header>
          <main>
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
