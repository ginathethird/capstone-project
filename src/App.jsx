import { useState } from "react";
import "./App.css";
import StockInput from "./StockInput";
import StockContext from "./StockContext";

function App() {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("USD");

  return (
    <StockContext.Provider
      value={{ currencyFrom, setCurrencyFrom, currencyTo, setCurrencyTo }}
    >
      <>
        <img src="https://images.unsplash.com/photo-1665652475985-37e285aeff53?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <h1>Finance Dashboard</h1>
        <StockInput />
      </>
    </StockContext.Provider>
  );
}

export default App;
