import React, { useState } from 'react';
//import uniqueId from 'uniqid';
//import '../NewInvoiceForm.css';
// TO DO: need a functioning addLineItem so that I can submit form
// look at APP.js for example of how you did the last one 
// fix the invoice ID because it's messing up the localStorage

function NewLineItemForm({addLineItem}) {
  const [lineItems, setLineItems] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setLineItems([...lineItems, e.target.value]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addLineItem(lineItems);
    setLineItems([...lineItems, e.target.value]);
  }

  return (
    <div>
      <p>Add a line item</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="desc">Description</label>
        <input id="desc" name="desc" value={lineItems.desc} onChange={handleInputChange} />
        <label htmlFor="amount">Amount</label>
        <input id="amount" name="amount" value={lineItems.amount} onChange={handleInputChange} />
        <label htmlFor="amount">Notes</label>
        <input id="notes" name="notes" value={lineItems.notes} onChange={handleInputChange} />
        <button>Add Item</button>
      </form>
    </div>
  )
}

export default NewLineItemForm; 