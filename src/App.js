
import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Invoice from "./components/invoice/Invoice";
import InvoiceList from './components/invoice/InvoiceList';
import { InvoiceContext } from './contexts/InvoiceContext';
import NewInvoiceForm from "./components/NewInvoiceForm/NewInvoiceForm.js";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

function App() {
  const { invoices } = useContext(InvoiceContext);
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className="app-container">
      <Router>
        <div>
          <header>
            <Typography variant="h3">Invoicing!</Typography>
            <Link to="/">Home</Link>
          </header>
          <main>
            <Button variant="outlined" onClick={handleClickOpen}>Add New Invoice</Button>
            <NewInvoiceForm open={open} setOpen={setOpen} handleClose={handleClose}/>
            {invoices.length > 0 && <InvoiceList/>}
            <ul>
              <Switch>
                <Route exact path="/:id" children={<Invoice/>} />
              </Switch>
            </ul>
          </main>
        </div>
      </Router>

    </div>
  );
}

export default App;
