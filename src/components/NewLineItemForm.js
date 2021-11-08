import React, { useState, useEffect } from 'react';
import uniqueId from 'uniqid';
//import '../NewInvoiceForm.css';
// TO DO: need a functioning addLineItem so that I can submit form
// look at APP.js for example of how you did the last one 
// fix the invoice ID because it's messing up the localStorage

function NewLineItemForm({invoice}) {
  const [lineItem, setLineItem] = useState([]);
  const [lineItems, setLineItems] = useState(invoice.lineItems);

  const handleInputChange = (e) => {
    e.preventDefault();
    setLineItem({...lineItem, [e.target.name]: e.target.value, itemNo: uniqueId()});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //([...lineItems, lineItem]);
    //invoice.lineItems.push(lineItems)
    invoice.lineItems.push(lineItem)
    console.log(invoice.lineItems)
  }

  return (
    <div>
      <p>Add a line item</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Description</label>
        <input id="title" name="title" value={lineItems.title} onChange={handleInputChange} />
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