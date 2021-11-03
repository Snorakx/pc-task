import "./style.scss";
import React from "react";
import WrapperComponent from "./components/Wrapper";

function App() {
  require('dotenv').config();

  return (
    <WrapperComponent/>
  );
}

export default App;
