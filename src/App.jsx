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
        <StockInput />
      </>
    </StockContext.Provider>
  );
}

export default App;
