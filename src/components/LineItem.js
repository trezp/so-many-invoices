import React from 'react';

class LineItem extends React.Component {

  render () {
    return this.props.lineItem.map((lineItem) => 
      <tr key={lineItem.itemNo}>
        <td>{lineItem.title}</td>
        <td>{lineItem.amount}</td>
        <td>{lineItem.notes}</td>
      </tr>
    )}
}

export default LineItem;