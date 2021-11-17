import React, { useContext } from 'react';
import { useParams } from "react-router-dom";

import InvoiceTable from './InvoiceTable.js';
import { InvoiceContext } from '../../contexts/InvoiceContext';

import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './Invoice.css';

function Invoice () {
  const { id } = useParams();
  const { invoices } = useContext(InvoiceContext);
  const invoice = invoices.find(invoice => invoice.id === id);

  return (
    <div className="invoice-container">            
      <Link to="/"><ArrowBackIcon/>Back to Invoice List</Link>
      <li key={invoice.id} className="invoice-list-item">
        <h2>{invoice.title}</h2>
        <h3>{invoice.desc}</h3>
        <InvoiceTable lineItems={invoice.lineItems} invoice={invoice}></InvoiceTable> 
      </li>
    </div>
  )
}

export default Invoice;