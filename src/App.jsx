// import { useState } from "react";
// import "./App.css";
// import StockInput from "./StockInput";
// import StockContext from "./StockContext";

// function App() {
//   const [currencyFrom, setCurrencyFrom] = useState("USD");
//   const [currencyTo, setCurrencyTo] = useState("USD");
//   const [displayStockList, setDisplayStockList] = useState("");

//   return (
//     <StockContext.Provider
//       value={{ currencyFrom, setCurrencyFrom, currencyTo, setCurrencyTo }}
//     >
//       <div className="container">
//           <div className="header">
//             Finance Dashboard
//           </div>

//           <StockInput />
//           <div className="container">
//             <h2>Stock List</h2>
//             <p>No stocks added yet.</p>
//           </div>
//       </div>
//     </StockContext.Provider>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import StockInput from "./StockInput";
import StockContext from "./StockContext";

function App() {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [stocks, setStocks] = useState([]);

  function addStock(stock) {
    setStocks((prevStocks) => [...prevStocks, stock]);
  }

  return (
    <StockContext.Provider
      value={{ currencyFrom, setCurrencyFrom, currencyTo, setCurrencyTo }}
    >
      <div className="container">
        <div className="header">Stock Finance Calculator</div>
        <StockInput onAddStock={addStock} />
        <div className="container">
          <h2>Stock List</h2>
          {stocks.length === 0 ? (
            <p>No stocks added yet.</p>
          ) : (
            <ul>
              {stocks.map((stock, index) => {
                const profitLoss = (stock.currentPrice - stock.purchasePrice) * stock.quantity;
                const profitLossColor = profitLoss >= 0 ? "green" : "red";
                
                return (
                  <li key={index} className="stock-item">
                    <div><strong>Symbol:</strong> {stock.symbol}</div>
                    <div><strong>Quantity:</strong> {stock.quantity}</div>
                    <div><strong>Purchase Price:</strong> {stock.purchasePrice}</div>
                    <div><strong>Current Price:</strong> {stock.currentPrice}</div>
                    <div style={{ color: profitLossColor }}>
                      <strong>Profit/Loss:</strong> {profitLoss >= 0 ? `+${profitLoss.toFixed(2)}` : profitLoss.toFixed(2)}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </StockContext.Provider>
  );
}

export default App;
