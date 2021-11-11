import LineItem from './LineItem.js';

function InvoiceTable({lineItems}){
  return (
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
        {lineItems && lineItems.map(lineItem => <LineItem lineItem={lineItem} key={lineItem.itemNo}/> )}
      </tbody>
    </table> 
  )
}

export default InvoiceTable; 