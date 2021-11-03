import React from "react";
import WrapperComponent from "./components/templates/Wrapper";
import PageComponent from "./components/templates/page";

function App() {
  require("dotenv").config();

  return (
    <PageComponent>
      <WrapperComponent />
    </PageComponent>
  );
}

export default App;
