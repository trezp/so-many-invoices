function LineItem (props){
  return (     
    <tr key={props.lineItem.id}>
      <td>{props.lineItem.itemNo}</td>
      <td>{props.lineItem.title}</td>
      <td>{props.lineItem.amount}</td>
      <td>{props.lineItem.notes}</td>
    </tr>
  )
}

export default LineItem;