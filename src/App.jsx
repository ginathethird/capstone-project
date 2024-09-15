import { useState } from "react";
import "./App.css";
import CurrencyDropdown from "./CurrencyDropdown";
import MyContext from "./CurrencyContext";

function App() {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("USD");

  return (
    <MyContext.Provider
      value={{ currencyFrom, setCurrencyFrom, currencyTo, setCurrencyTo }}
    >
      <>
        <h1>Currency Converter</h1>
        <CurrencyDropdown />
      </>
    </MyContext.Provider>
  );
}

export default App;
