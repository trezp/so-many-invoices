import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { InvoiceContext } from '../../contexts/InvoiceContext';
import './NewInvoiceForm.css';


function InvoiceForm(props) {
  const { addInvoice } = useContext(InvoiceContext);
  const { open, setOpen, handleClose} = props;

  const [invoice, setInvoice] = useState({});

  const handleInputChange = (e) => {
    e.preventDefault();
    setInvoice({...invoice, [e.target.name]: e.target.value, id: uuid()});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    addInvoice(invoice);
    setInvoice({title: '', desc: '', amount: ''}); 
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Invoice</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Invoice Title"
            type="text"
            fullWidth
            variant="standard"
            name="title"
            value={invoice.title || ''}
            onChange={handleInputChange}
            required
          />
          <TextField
            margin="dense"
            id="desc"
            label="Invoice Description"
            type="text"
            fullWidth
            variant="standard"
            name="desc"
            value={invoice.desc || ''}
            onChange={handleInputChange}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default InvoiceForm; 