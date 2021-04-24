import React from 'react';

import LineItem from '../LineItem.js';
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
      <table className="line-item-table">
        <thead>
          <tr>
            <td>Item No.</td>
            <td>Description</td>
            <td>Amount</td>
            <td>Notes</td>
          </tr>
        </thead>
        <tbody>
          {invoice.lineItems.map(lineItem => <LineItem lineItem={lineItem} key={lineItem.itemNo}/> )}
          <tr>
            <td></td>
            <td>Total</td>
            <td>20000</td>
            <td></td>
          </tr>
        </tbody>
      </table> 
    </li>);
}

export default Invoice;