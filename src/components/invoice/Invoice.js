import React from 'react';

import InvoiceTable from '../InvoiceTable.js';
import NewLineItemForm from '../NewLineItemForm.js';
import {
  useParams
} from "react-router-dom";

import './Invoice.css';

function Invoice ({addLineItem}) {
  const { id } = useParams();
  const invoices = JSON.parse(localStorage.getItem('invoices'));
  const invoice = invoices.find(invoice => invoice.id === id);
  // invoice.lineItems = [
  //   {
  //     "itemNo": 33434, 
  //     "title": "Line item title",
  //     "amount": 5000,
  //     "notes": "Line item note,"
  //   },
  //   {
  //     "itemNo": 3333, 
  //     "title": "Line item title 3",
  //     "amount": 5000,
  //     "notes": "Line item note,"
  //   },
  //   {
  //     "itemNo": 34343, 
  //     "title": "Line item title 4",
  //     "amount": 5000,
  //     "notes": "Line item note,"
  //   },
  //   {
  //     "itemNo": 2233212, 
  //     "title": "Another line item",
  //     "amount": 5000,
  //     "notes": "Line item note,"
  //   },
  // ]

  return (
    <li key={invoice.id} className="invoice-list-item">
      <h2>{invoice.title}</h2>
      <h3>Invoice date: {invoice.created}</h3>
      <h3>Please pay by: {invoice.due}</h3>
      <NewLineItemForm invoice={invoice} addLineItem={addLineItem}/>
      <InvoiceTable invoice={invoice} lineItems={invoice.lineItems}></InvoiceTable> 
    </li>
    )
}

export default Invoice;