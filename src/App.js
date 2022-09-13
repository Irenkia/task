import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./styles/App.css";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
      {/* <h3>Hello</h3> */}
    </div>
  );
}

export default App;
