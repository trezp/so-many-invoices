import React, { createContext, useState } from 'react';
import data from './invoiceDB.json';
import uniqueId from 'uniqid';

export const InvoiceContext = createContext();

const InvoiceContextProvider = (props) => {
  const [invoices, setInvoices] = useState(data);

  const addInvoice = (invoice) => {
    setInvoices([...invoices, invoice]);
  };

  const addLineItems = (lineItem, invoice) => {
    invoices.forEach(item => {
      if(item.id === invoice.id){
        item.lineItems.push(lineItem)
      }
    });
    setInvoices([...invoices])
  }

  const removeInvoice = (invoiceToBeDeleted) => {
    setInvoices(invoices.filter((invoice) => invoiceToBeDeleted !== invoice));
  };

  return (
    <InvoiceContext.Provider value={{ invoices, addInvoice, addLineItems, removeInvoice}}>
      {props.children}
    </InvoiceContext.Provider>
  );
}
 
export default InvoiceContextProvider;