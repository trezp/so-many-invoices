import React from 'react';

import LineItem from '../LineItem.js';

import data from '../../invoiceDB.json';
import './Invoice.css';

class Invoice extends React.Component {

  makeListItems (){
    return data.map((listItem) =>
      <li key={listItem.id} className="invoice-list-item">
        <h3>{listItem.title}</h3>
        <table className="line-item-table">
          <thead>
            <tr>
              <td>Item</td>
              <td>Amount</td>
              <td>Notes</td>
            </tr>
          </thead>
          <tbody>
          <LineItem lineItem={listItem.lineItems}/>
          </tbody>
        </table> 
      </li>);
  }

  render () {
    return (
      <ul>
        {this.makeListItems()}
      </ul>
    )
  }
  componentDidMount() {
    console.log(data);
  }
}

export default Invoice;