import React, { useState } from "react";
import "./styles.css";

const Main = () => {
  const [valueBitcoin, setValueBitcoin] = useState(0);
  const [valueDollar, setValueDollar] = useState(0);
  const result = valueDollar / valueBitcoin;

  const handleChange = (event) => {
    setValueBitcoin(event.target.value);
  };

  const handleChangeDollar = (event) => {
    setValueDollar(event.target.value);
  };

  return (
    <div className="content" id="home">
      <h3>
        <br />
        <span>Buy Bitcoin with dollars</span>
      </h3>
      <p>What is Bitcoin price today?</p>
      <input
        type="number"
        value={valueBitcoin}
        placeholder="Enter namber"
        onChange={handleChange}
      />
      <p>How much $ do you have?</p>
      <input
        type="number"
        value={valueDollar}
        placeholder="Enter namber"
        onChange={handleChangeDollar}
      />
      <h3>You can buy {`${result.toFixed(7)}`} BTC</h3>
      <div className="home"></div>
    </div>
  );
};

export default Main;
