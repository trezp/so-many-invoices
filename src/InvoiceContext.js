import React, { createContext, useState } from 'react';
export const InvoiceContext = createContext();

const InvoiceContextProvider = (props) => {
  const [invoices, setInvoices] = useState([
    {
      "id": "",
      "title": "",
      "link": "",
      "created": "",
      "due": "",
      "status": "outstanding",
      "lineItems": [{
        "itemNo": 1,
        "title": "Materials",
        "amount": 50,
        "notes": "This is a note"
      }]
    }]);

  const [lineItemNo, setLineItemNo] = useState(1);

  const addInvoice = (invoice) => {
    setInvoices([...invoices, invoice]);
  };

  const addLineItems = (lineItem, invoice) => {
    invoices.forEach(item => {
      if(item.id === invoice.id){
        item.lineItems.push(lineItem);
        setLineItemNo(item.lineItems.length + 1);
        lineItem.itemNo = lineItemNo;
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