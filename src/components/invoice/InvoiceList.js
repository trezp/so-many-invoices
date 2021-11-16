import React, { useContext } from 'react';
import { InvoiceContext } from '../../contexts/InvoiceContext';
import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

const InvoiceList = () => {
  const { invoices, removeInvoice } = useContext(InvoiceContext);

  const handleClick = (e, invoice) => {
    e.preventDefault();
    removeInvoice(invoice);
  }

  return (
    <List>
      {invoices && invoices.map(invoice => 
        <ListItem key={invoice.id}>
          <Link to={invoice.id}>
            <ListItemText>{invoice.title}</ListItemText>
          </Link>
          <ListItemButton onClick={(e) => {handleClick(e,invoice)}}><DeleteForeverTwoToneIcon/></ListItemButton>
        </ListItem>
      )}
    </List>
  );
}
 
export default InvoiceList;