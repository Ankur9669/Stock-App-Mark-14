
import './App.css';
import { useState } from "react";

function App() 
{
  const [outputMessage, setOutputMessage] = useState("Output would be shown here...");
  const [intialPrice, setIntialPrice] = useState();
  const [quantityOfStocks, setQuantityOfStocks] = useState();
  const [currentPrice, setCurrentPrice] = useState(); 
  const [className, setClassName] = useState("");
  

  function handleSubmit(e)
  {
    e.preventDefault();

    let tempInitialPrice = intialPrice;
    let tempQuantityOfStocks = quantityOfStocks;
    let tempCurrentPrice = currentPrice;
    let totalInitialPrice = parseInt(tempQuantityOfStocks) * parseInt(tempInitialPrice);
    let totalCurrentPrice = parseInt(tempQuantityOfStocks) * parseInt(tempCurrentPrice);
    let percentage;
    if(tempInitialPrice < tempCurrentPrice)
    {
      percentage = (totalCurrentPrice / totalInitialPrice) * 100;
      let profit = totalCurrentPrice - totalInitialPrice;
      setOutputMessage("Hey, the profit is " + profit + " and % is " + parseInt(percentage) + "%");
      setClassName("correct");
    }
    else if(tempInitialPrice > tempCurrentPrice)
    {
      percentage = (totalInitialPrice / totalCurrentPrice) * 100;
      let loss = totalInitialPrice - totalCurrentPrice;
      setOutputMessage("Oops u had a loss of " + loss + " and % is " + parseInt(percentage) + "%");
      setClassName("incorrect");
    }
    else{
      percentage = 0;
      setOutputMessage("No profit or loss");
    }
  }
  return (
    <div className="App">
      <div className = {className + " container"} >
        <header className = "heading">Stock Profile & Loss Calculator</header>

        <form onSubmit = {(e) => handleSubmit(e)}>
          <label for = "intial-price" className = "label">Initial Price: </label>
          <input type = "number" className = "input" onChange = {(e) => setIntialPrice(e.target.value)}></input>

          <label for = "quantity-of-stocks" className = "label">Quantity of Stocks: </label>
          <input type = "number" className = "input" onChange = {(e) => setQuantityOfStocks(e.target.value)}></input>

          <label for = "current-price" className = "label">Current Price: </label>
          <input type = "number" className = "input" onChange = {(e) => setCurrentPrice(e.target.value)}></input>

          <button type = "submit" className = "button">Tell Me!</button>
        </form>

        <div className = "output">
          {outputMessage}
        </div>
      </div>
    </div>
  );
}

export default App;
