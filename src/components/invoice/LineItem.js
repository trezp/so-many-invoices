function LineItem ({lineItem}){
  return (   
    <tr key={lineItem.id}>
      <td>{lineItem.itemNo}</td>
      <td>{lineItem.title}</td>
      <td>{lineItem.amount}</td>
      <td>{lineItem.notes}</td>
    </tr>
  )
}

export default LineItem;