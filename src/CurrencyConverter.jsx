import { useState, useEffect, useContext } from "react";
import MyContext from "./CurrencyContext";

function CurrencyConverter() {
  const [inputAmount, setInputAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const { currencyFrom, currencyTo, setCurrencyFrom, setCurrencyTo } =
    useContext(MyContext);

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/0a54c301098c7ea1a4c430c2/pair/" +
        currencyFrom +
        "/" +
        currencyTo +
        "/" +
        inputAmount
    )
      .then((res) => res.json())
      .then((data) => setConvertedAmount(data.conversion_result));
  }, [inputAmount, currencyFrom, currencyTo]);

  function handleChange(event) {
    setInputAmount(event.target.value);
  }

  return (
    <div className="container">
      {/* Controlled component */}
      <input
        value={inputAmount}
        placeholder="Enter amount"
        className="converter-input"
        onChange={handleChange}
      />
      <p>{currencyFrom}</p>
      <p>=</p>
      <p className="converter-result">
        {convertedAmount === "" ? "0" : convertedAmount}
      </p>
      <p>{currencyTo}</p>
    </div>
  );
}

export default CurrencyConverter;
