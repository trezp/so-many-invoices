import React, { useState, useContext } from 'react';
import uniqueId from 'uniqid';
import { InvoiceContext } from '../../InvoiceContext';
import './NewInvoiceForm.css';


function InvoiceForm() {
  const { addInvoice } = useContext(InvoiceContext);

  const [invoice, setInvoice] = useState({
    id: '',
    title: '',
    desc: '',
    amount: '',
    created: "April 11, 2021",
    due: "May 10, 2021",
    status: "current",
    lineItems: []
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setInvoice({...invoice, [e.target.name]: e.target.value, id: uniqueId()});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    addInvoice(invoice);
    
    setInvoice({
      id: '',
      title: '',
      desc: '',
      amount: '',
      created: "April 11, 2021",
      due: "May 10, 2021",
      status: "current",
      lineItems: []
    }); 
  };

  return (
    <div>
      <p>Add item</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" value={invoice.title || ""} onChange={handleInputChange} />
        <label htmlFor="desc">Description</label>
        <input id="desc" name="desc" value={invoice.desc} onChange={handleInputChange} />
        <label htmlFor="amount">Amount</label>
        <input id="amount" name="amount" value={invoice.amount} onChange={handleInputChange} />
        <button>Add New Invoice</button>
      </form>
    </div>
  );
  
}

export default InvoiceForm; 