import React, { useState, useContext } from 'react';
import { InvoiceContext } from '../../contexts/InvoiceContext';
import { v4 as uuid } from 'uuid';

import LineItem from './LineItem.js';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';  

function InvoiceTable({lineItems, invoice}){
  const { addLineItems } = useContext(InvoiceContext);
  const [lineItem, setLineItem] = useState([]);
  const [lineItemCount, setLineItemCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    addLineItems(lineItem, invoice); 
    setLineItemCount(lineItemCount + 1);
    setLineItem({title: '', amount: '', itemNo: '', notes: '', id: ''});
  }

  const handleInputChange = (e) => {
    e.preventDefault(); 
    setLineItem({...lineItem, [e.target.name]: e.target.value, id: uuid(), itemNo: lineItemCount});
  }

  return (
    <form onSubmit={handleSubmit}>
      <table className="line-item-table">
        <thead>
          <tr>
            <td>Item No.</td>
            <td>Description</td>
            <td>Amount</td>
            <td>Notes</td>
          </tr>
        </thead>
        <tbody>
          {lineItems && lineItems.map(lineItem => <LineItem lineItem={lineItem} key={lineItem.id}/> )}
          <tr key={invoice.id}>
            <td></td>
            <td><input id="title" name="title" value={lineItem.title || ''} onChange={handleInputChange}/></td>
            <td><input id="amount" name="amount" value={lineItem.amount || ''} onChange={handleInputChange} /></td>
            <td>
              <input id="notes" name="notes" value={lineItem.notes || ''} onChange={handleInputChange} />
            </td>
          </tr>
        </tbody>
      </table>
      <button><AddCircleOutlineOutlinedIcon/></button>
    </form> 
  )
}

export default InvoiceTable; 