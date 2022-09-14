import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="wrapper">
      <Header title={"Buy Bitcoin with dollars"} />
      <Main
        priceBitcoin={"What is Bitcoin price today?"}
        amountDollars={"How much $ do you have?"}
      />
      <Footer />
    </div>
  );
}

export default App;
