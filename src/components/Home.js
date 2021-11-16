import React, { useContext } from 'react';
import Button from '@mui/material/Button';

import { InvoiceContext } from '../contexts/InvoiceContext';
import NewInvoiceForm from "../components/NewInvoiceForm/NewInvoiceForm.js";
import InvoiceList from '../components/invoice/InvoiceList';

function Home (){
  const { invoices } = useContext(InvoiceContext);
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  return ( 
    <div>  
      <Button variant="outlined" onClick={handleClickOpen}>Add New Invoice</Button>
      <NewInvoiceForm open={open} setOpen={setOpen} handleClose={handleClose}/>
      {invoices && <InvoiceList/>}
    </div>
  )
}

export default Home;