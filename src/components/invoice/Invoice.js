import React from 'react'
import data from '../../invoiceDB.json';
import './Invoice.css';

class Invoice extends React.Component {

  makeListItems (){
    return data.map((listItem) =>
    <li key={listItem.id} className="invoice-list-item">
      <h3>{listItem.title}</h3>
      <ul className="invoice-line-item-list">
       {listItem.lineItems.map((lineItem) => 
       <li key={lineItem.itemNo}>
         <ul className="invoice-line-item">
           <li>{lineItem.title}</li>
           <li>{lineItem.amount}</li>
           <li>{lineItem.notes}</li>
         </ul>
       </li> )}
      </ul>
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