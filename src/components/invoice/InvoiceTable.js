import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import { InvoiceContext } from '../../contexts/InvoiceContext';

import LineItem from './LineItem.js';
import NewLineItemForm from './NewLineItemForm.js';   

function InvoiceTable({lineItems, invoice}){
  const { addLineItems } = useContext(InvoiceContext);
  const [lineItem, setLineItem] = useState([]);
  const [lineItemCount, setLineItemCount] = useState(1);

  const handleInputChange = (e) => {
    e.preventDefault(); 
    setLineItem({...lineItem, [e.target.name]: e.target.value, id: uuid(), itemNo: lineItemCount});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addLineItems(lineItem, invoice); 
    setLineItemCount(lineItemCount + 1);
    setLineItem({title: '', amount: '', itemNo: '', notes: '', id: ''});
  }
  return (
    <form onSubmit={handleSubmit}>
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
        {lineItems && lineItems.map(lineItem => <LineItem lineItem={lineItem}/> )}
        <tr key={invoice.id}>
          <td></td>
          <td><input id="title" name="title" value={lineItem.title} onChange={handleInputChange} /></td>
          <td><input id="amount" name="amount" value={lineItem.amount} onChange={handleInputChange} /></td>
          <td><input id="notes" name="notes" value={lineItem.notes} onChange={handleInputChange} /> <button>Add Line Item</button></td>
        </tr>
      </tbody>
    </table>
    </form> 
  )
}

export default InvoiceTable; 