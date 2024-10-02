// import { useContext, useEffect, useState } from "react";
// import "./App.css";

// function StockInput() {
//   const [inputStockSymbol, setInputStockSymbol] = useState("");
//   const [inputQuantity, setQuantity] = useState("");
//   const [inputPurchasePrice, setInputPurchasePrice] = useState("");

//   let stockSymbol = "";

//   function handleInputStockSymbolChange(event) {
//     setInputStockSymbol(event.target.value);
//   }

//   function handleInputQuantityChange(event) {
//     setQuantity(event.target.value);
//   }

//   function handleInputPurchasePriceChange(event) {
//     setInputPurchasePrice(event.target.value);
//   }

//   function submit() {
//     // fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+ stockSymbol + "&apikey=C809GBXD3W7AHK5M")
//     // .then((res) => res.json())
//     // .then((data) => console.log(data));
//     fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
//   }

//   return (
//     <div>
//       <div className="inputContainer">
//         <input
//           value={inputStockSymbol}
//           placeholder="Select Stock Symbol"
//           className="input"
//           onChange={handleInputStockSymbolChange}
//         />

//         <input
//           value={inputQuantity}
//           placeholder="Quantity"
//           className="input"
//           onChange={handleInputQuantityChange}
//         />

//         <input
//           value={inputPurchasePrice}
//           placeholder="Enter Purchase Price"
//           className="input"
//           onChange={handleInputPurchasePriceChange}
//         />

//         <button
//             className="add-stock-btn"
//             onClick={submit}
//             type="submit"
//           >
//             Add Stock 
//         </button> 

//       </div>
//     </div>
    
//   );
// }

// export default StockInput;

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
