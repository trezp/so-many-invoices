import LineItem from './LineItem.js';

function invoiceTable(props){
  return (
    <table className="line-item-table">
      <thead>
        <tr>
          <td>Item No.</td>
          <td>Description</td>
          <td>Amount</td>
        </tr>
      </thead>
      <tbody>
        {props.lineItems.map(lineItem => <LineItem lineItem={lineItem} key={lineItem.itemNo}/> )}
      </tbody>
    </table> 
  )
}

export default invoiceTable; 