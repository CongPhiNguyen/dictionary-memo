import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers";
import Header from "./shared/components/Header";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="header-container">
        <Header />
      </div>
      <div className="page-container">
        <Routers />
      </div>
    </BrowserRouter>
  );
}

export default App;
