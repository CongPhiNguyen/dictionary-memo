import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers";
import Header from "./shared/components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
