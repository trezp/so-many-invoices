import React, { useState, useContext } from 'react';
import { InvoiceContext } from '../InvoiceContext';
import uniqueId from 'uniqid';

function NewLineItemForm({invoice}) {
  const { addLineItems } = useContext(InvoiceContext);
  const [lineItem, setLineItem] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setLineItem({...lineItem, [e.target.name]: e.target.value, itemNo: uniqueId()});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addLineItems(lineItem, invoice);
  }

  return ( 
    <div>
      <p>Add a line item</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Description</label>
        <input id="title" name="title" value={lineItem.title} onChange={handleInputChange} />
        <label htmlFor="amount">Amount</label>
        <input id="amount" name="amount" value={lineItem.amount} onChange={handleInputChange} />
        <label htmlFor="amount">Notes</label>
        <input id="notes" name="notes" value={lineItem.notes} onChange={handleInputChange} />
        <button>Add Item</button>
      </form>
    </div>
  )
}

export default NewLineItemForm; 