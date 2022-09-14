import React, { useState } from "react";
import "./styles.css";

const Main = () => {
  const [valueBitcoin, setValueBitcoin] = useState("");
  const [valueDollar, setValueDollar] = useState("");
  const [result, setResult] = useState(0);
  const regex = /\D/g;

  const handleChange = (event) => {
    const value = event.target.value;
    event.target.value = value.replace(regex, "");
    setValueBitcoin(event.target.value);
  };

  const handleChangeDollar = (event) => {
    const value = event.target.value;
    event.target.value = value.replace(regex, "");
    setValueDollar(event.target.value);
  };

  const handlerButton = () => {
    setResult(parseFloat(valueDollar) / parseFloat(valueBitcoin));
  };

  return (
    <div className="content" id="home">
      <h3>
        <br />
        <span>Buy Bitcoin with dollars</span>
      </h3>
      <p>What is Bitcoin price today?</p>
      <input
        value={valueBitcoin}
        placeholder="Enter namber"
        onChange={handleChange}
      />
      <p>How much $ do you have?</p>
      <input
        value={valueDollar}
        placeholder="Enter namber"
        onChange={handleChangeDollar}
      />
      <h3>You can buy {result === 0 ? "0" : result.toFixed(7)} BTC</h3>
      <button className={"btn"} onClick={handlerButton}>
        Result
      </button>
      <div className="home"></div>
    </div>
  );
};

export default Main;
