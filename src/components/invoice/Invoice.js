import React from 'react';

import InvoiceTable from '../InvoiceTable.js';
import NewLineItemForm from '../NewLineItemForm.js';
import {
  useParams
} from "react-router-dom";

import './Invoice.css';

function Invoice () {
  const { id } = useParams();
  const invoices = JSON.parse(localStorage.getItem('invoices'));
  const invoice = invoices.find(invoice => invoice.id === id);

  return (
    <li key={invoice.id} className="invoice-list-item">
      <h2>{invoice.title}</h2>
      <h3>Invoice date: {invoice.created}</h3>
      <h3>Please pay by: {invoice.due}</h3>
      {true ? 
        <NewLineItemForm/>
        : 
        <InvoiceTable invoice={invoice} lineItems={invoice.lineItems}></InvoiceTable> }
      
    </li>)
}

export default Invoice;