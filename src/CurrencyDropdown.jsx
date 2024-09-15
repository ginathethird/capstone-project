import { useContext, useEffect, useState } from "react";
import "./CurrencyStyling.css";
import CurrencyConverter from "./CurrencyConverter";
import MyContext from "./CurrencyContext";

function CurrencyDropdown() {
  const [currencyCodes, setCurrencyCodes] = useState([]);
  const { currencyFrom, currencyTo, setCurrencyFrom, setCurrencyTo } =
    useContext(MyContext);

  function handleCurrencyFromChange(event) {
    setCurrencyFrom(event.target.value);
  }

  function handleCurrencyToChange(event) {
    setCurrencyTo(event.target.value);
  }

  useEffect(() => {
    fetch("https://v6.exchangerate-api.com/v6/0a54c301098c7ea1a4c430c2/codes")
      .then((res) => res.json())
      .then((data) => setCurrencyCodes(data.supported_codes));
  }, []);

  return (
    <div>
      <div className="container">
        <p>I want to convert</p>
        {/* Controlled component */}
        <select
          name="currency"
          id="currencySelect"
          onChange={handleCurrencyFromChange}
          value={currencyFrom}
        >
          {currencyCodes.map((codesPair) => (
            <option value={codesPair[0]}>{codesPair[1]}</option>
          ))}
        </select>
        <p>to</p>
        {/* Controlled component */}
        <select
          name="currency"
          id="currencySelect"
          onChange={handleCurrencyToChange}
          value={currencyTo}
        >
          {currencyCodes.map((codesPair) => (
            <option value={codesPair[0]}>{codesPair[1]}</option>
          ))}
        </select>
      </div>
      <CurrencyConverter currencyFrom={currencyFrom} currencyTo={currencyTo} />
    </div>
  );
}

export default CurrencyDropdown;
