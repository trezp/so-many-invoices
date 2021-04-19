import React, { useState } from 'react';

function InvoiceForm({addInvoice}) {

  const [invoice, setInvoice] = useState({
    id: "",
    title: "",
    created: "April 11, 2021",
    due: "May 10, 2021",
    status: "current",
    lineItems: []
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const invoiceId = String(JSON.parse(localStorage.getItem('invoices')).length + 1);
    setInvoice({...invoice, title: e.target.value, id: invoiceId});
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