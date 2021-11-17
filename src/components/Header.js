import React from 'react';

import Typography from '@mui/material/Typography';

function Header (){
  return ( 
    <header className="header">
      <div className="header-content">
        <Typography variant="h3">Invoicing!</Typography>
      </div>
    </header>
  )
}

export default Header;