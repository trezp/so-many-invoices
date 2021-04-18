import React from 'react';

import LineItem from '../LineItem.js';
import {
  useParams
} from "react-router-dom";

import data from '../../invoiceDB.json';
import './Invoice.css';

function Invoice () {
  const { id } = useParams();
  const invoice = data.find(invoice => invoice.id === id);
  console.log(id)
  return (
    <li key={invoice.id} className="invoice-list-item">
      <h3>{invoice.title}</h3>
      <table className="line-item-table">
        <thead>
          <tr>
            <td>Item</td>
            <td>Amount</td>
            <td>Notes</td>
          </tr>
        </thead>
        <tbody>
        <LineItem lineItem={invoice.lineItems}/>
        </tbody>
      </table> 
    </li>);
  // return data.map((listItem) =>
  //   <li key={listItem.id} className="invoice-list-item">
  //     <h3>{listItem.title}</h3>
  //     <table className="line-item-table">
  //       <thead>
  //         <tr>
  //           <td>Item</td>
  //           <td>Amount</td>
  //           <td>Notes</td>
  //         </tr>
  //       </thead>
  //       <tbody>
  //       <LineItem lineItem={listItem.lineItems}/>
  //       </tbody>
  //     </table> 
  //   </li>);
}

export default Invoice;