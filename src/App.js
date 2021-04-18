import Invoice from "./components/invoice/Invoice";
import data from './invoiceDB.json';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Router>
        <div>
          <header>
            <h1>Super Spectacular Invoicing!</h1>
          </header>
          <ul>
            {data.map(link => <li key={link.id}><Link to={link.id}>{link.title}</Link></li>)}
          </ul>

          <Switch>
            <ul><Route path="/:id" children={<Invoice />} /></ul>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
