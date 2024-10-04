import { useState } from "react";
import "./App.css";

function StockInput({ onAddStock }) {
  const [inputStockSymbol, setInputStockSymbol] = useState("");
  const [inputQuantity, setQuantity] = useState("");
  const [inputPurchasePrice, setInputPurchasePrice] = useState("");

  function handleInputStockSymbolChange(event) {
    setInputStockSymbol(event.target.value);
  }

  function handleInputQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleInputPurchasePriceChange(event) {
    setInputPurchasePrice(event.target.value);
  }

  function submit() {
    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${inputStockSymbol}&apikey=C809GBXD3W7AHK5M`
    )
      .then((res) => res.json())
      .then((data) => {
        const stockData = data["Global Quote"];
        if (stockData) {
          const currentPrice = parseFloat(stockData["05. price"]);

          const newStock = {
            symbol: inputStockSymbol.toUpperCase(),
            quantity: parseInt(inputQuantity),
            purchasePrice: parseFloat(inputPurchasePrice),
            currentPrice: currentPrice,
          };

          onAddStock(newStock);

          setInputStockSymbol("");
          setQuantity("");
          setInputPurchasePrice("");
        } else {
          alert("Invalid stock symbol or data not found.");
        }
      });
  }

  return (
    <div>
      <div className="inputContainer">
        <input
          value={inputStockSymbol}
          placeholder="Stock Symbol"
          className="input"
          onChange={handleInputStockSymbolChange}
        />

        <input
          value={inputQuantity}
          placeholder="Quantity"
          className="input"
          onChange={handleInputQuantityChange}
        />

        <input
          value={inputPurchasePrice}
          placeholder="Purchase Price"
          className="input"
          onChange={handleInputPurchasePriceChange}
        />

        <button className="add-stock-btn" onClick={submit} type="submit">
          Calculate
        </button>
      </div>
    </div>
  );
}

export default StockInput;
