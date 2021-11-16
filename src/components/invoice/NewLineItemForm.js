import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import { InvoiceContext } from '../../contexts/InvoiceContext';

function NewLineItemForm({invoice}) {
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
    <div>
      <p>Add a line item</p>
      <form onSubmit={handleSubmit}>
        <input type="hidden" id="id" name="id" value={lineItem.id} />
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