import React, { createContext, useState } from 'react';
export const InvoiceContext = createContext();

const InvoiceContextProvider = (props) => {
  const [invoices, setInvoices] = useState([]);

  const [lineItemNo, setLineItemNo] = useState(1);

  const addInvoice = (invoice) => {
    setInvoices([...invoices, invoice]);
  };

  const addLineItems = (lineItem, invoice) => {
    invoices.forEach(item => {
      if(!item.lineItems) {
       item.lineItems = [];
      } 

      if(item.id === invoice.id){
          item.lineItems.push(lineItem);
          setLineItemNo(item.lineItems.length + 1);
          lineItem.itemNo = lineItemNo;
      } else {
        console.log("not found")
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