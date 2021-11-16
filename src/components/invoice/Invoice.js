import React, { useContext } from 'react';
import { useParams } from "react-router-dom";

import InvoiceTable from './InvoiceTable.js';
import { InvoiceContext } from '../../contexts/InvoiceContext';

import './Invoice.css';

function Invoice () {
  const { id } = useParams();
  const { invoices } = useContext(InvoiceContext);
  const invoice = invoices.find(invoice => invoice.id === id);

  return (
    <li key={invoice.id} className="invoice-list-item">
      <h2>{invoice.title}</h2>
      <h3>{invoice.desc}</h3>
      <InvoiceTable lineItems={invoice.lineItems} invoice={invoice}></InvoiceTable> 
    </li>
  )
}

export default Invoice;