import React, { useState } from 'react';
import uniqueId from 'uniqid';

function InvoiceForm({addInvoice}) {

  const [invoice, setInvoice] = useState({
    id: uniqueId(),
    title: "",
    created: "April 11, 2021",
    due: "May 10, 2021",
    status: "current",
    lineItems: []
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setInvoice({...invoice, title: e.target.value, id: uniqueId()});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addInvoice(invoice);
  };

  return (
    <div>
      <p>Add item</p>
      <form onSubmit={handleSubmit}>
        <input value={invoice.title} onChange={handleInputChange} />
        <button>Add New Invoice</button>
      </form>
    </div>
  );
  
}

export default InvoiceForm; 