import React, { useContext } from 'react';
import { InvoiceContext } from '../../contexts/InvoiceContext';
import { Link } from "react-router-dom";

const InvoiceList = () => {
  const { invoices, removeInvoice } = useContext(InvoiceContext);

  const handleClick = (e, invoice) => {
    e.preventDefault();
    removeInvoice(invoice);
  }

  return (
    <ul>
    {invoices && invoices.map(invoice => 
      <li key={invoice.id}>
        <Link to={invoice.id}>{invoice.title}</Link>
        <button type="button" onClick={(e) => {handleClick(e,invoice)}}>X</button>
      </li>
    )}
  </ul>
  );
}
 
export default InvoiceList;