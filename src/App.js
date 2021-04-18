import Invoice from "./components/invoice/Invoice";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Super Spectacular Invoicing!</h1>
      </header>

      <Invoice/>
    </div>
  );
}

export default App;
