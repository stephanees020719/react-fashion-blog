import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Article from "./components/Article";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
